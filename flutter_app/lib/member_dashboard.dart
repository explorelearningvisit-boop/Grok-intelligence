import 'package:flutter/material.dart';

const _gold = Color(0xFFF0C14B);
const _cream = Color(0xFFFFF7EC);
const _due = Color(0xFFD3122A);
const _ok = Color(0xFF168A3A);

enum DayMark { present, late, absent, holiday, idle }
enum IntelSection { cal, trend, history, insights, more }

DayMark markFor(int month, int day) {
  if (month == 11) return DayMark.idle;
  if (month == 10) {
    if ({4, 11, 18, 25}.contains(day)) return DayMark.holiday;
    if ({10, 21}.contains(day)) return DayMark.late;
    if ({23, 24}.contains(day)) return DayMark.absent;
    return DayMark.present;
  }
  if (DateTime(2026, month, day).weekday == DateTime.sunday) return DayMark.holiday;
  if ({11, 18}.contains(day)) return DayMark.absent;
  if ({4, 22}.contains(day)) return DayMark.late;
  return DayMark.present;
}

Color markColor(DayMark mark) => switch (mark) {
  DayMark.present => const Color(0xFF1F9D4C),
  DayMark.late => const Color(0xFFF5C400),
  DayMark.absent => const Color(0xFFEF3B3B),
  DayMark.holiday => const Color(0xFF7C3AED),
  DayMark.idle => const Color(0xFFD1D5DB),
};

class MemberDashboard extends StatefulWidget {
  const MemberDashboard({super.key});
  @override
  State<MemberDashboard> createState() => _MemberDashboardState();
}

class _MemberDashboardState extends State<MemberDashboard> {
  bool magenta = false, paid = false, frozen = false, ordered = false;
  int month = 10, slide = 0;
  IntelSection section = IntelSection.cal;

  Color get accent => magenta ? const Color(0xFFF9A8D4) : _gold;
  Color get bgTop => magenta ? const Color(0xFFC026D3) : const Color(0xFFA31812);
  Color get bgBottom => magenta ? const Color(0xFF4A044E) : const Color(0xFF3A0206);

  void showInfo(String title, String description) {
    showModalBottomSheet<void>(
      context: context, showDragHandle: true, isScrollControlled: true,
      builder: (context) => Padding(
        padding: const EdgeInsets.fromLTRB(24, 12, 24, 36),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start,
          children: [Text(title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w800)),
            const SizedBox(height: 12), Text(description), const SizedBox(height: 16),
            FilledButton(onPressed: () => Navigator.pop(context), child: const Text('Close'))]),
      ),
    );
  }

  Widget panel(Widget child, {EdgeInsets padding = const EdgeInsets.all(12)}) => Container(
    padding: padding,
    decoration: BoxDecoration(
      gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter,
        colors: [Color(0xFFFFFDF8), Color(0xFFFFF3E4)]),
      border: Border.all(color: const Color(0xFFE7C56A), width: 1.5),
      borderRadius: BorderRadius.circular(22),
      boxShadow: const [BoxShadow(color: Color(0x44000000), blurRadius: 18, offset: Offset(0, 8))]),
    child: child,
  );

  Widget pill(String text, Color color, {Color fg = Colors.white}) => Container(
    padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 5),
    decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(20)),
    child: Text(text, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: fg)),
  );

  @override
  Widget build(BuildContext context) => Scaffold(
    body: Container(
      decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter,
        end: Alignment.bottomCenter, colors: [bgTop, bgBottom])),
      child: SafeArea(child: ListView(padding: const EdgeInsets.fromLTRB(10, 12, 10, 24), children: [
        Row(children: [
          Icon(Icons.fitness_center, color: accent, size: 30),
          const SizedBox(width: 8),
          Expanded(child: Column(children: [
            Text('BAD GYM', style: TextStyle(color: accent, fontSize: 25, fontWeight: FontWeight.w900)),
            const Text('Member Intelligence', style: TextStyle(color: Color(0xFFF3D48A), fontSize: 11)),
          ])),
          IconButton(onPressed: () => showInfo('Search', 'Search panel'), icon: const Icon(Icons.search, color: Colors.white)),
          IconButton(onPressed: () => showInfo('Alerts', '3 alerts'), icon: const Icon(Icons.notifications, color: Colors.white)),
          IconButton(onPressed: () => showInfo('Member QR', 'QR pass'), icon: const Icon(Icons.qr_code_scanner, color: Colors.white)),
        ]),
        const SizedBox(height: 14),
        if (frozen) Padding(padding: const EdgeInsets.only(bottom: 10),
          child: pill('Membership frozen · resumes when you unfreeze', Colors.lightBlue)),
        panel(Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            ClipRRect(borderRadius: BorderRadius.circular(16),
              child: Image.asset('assets/member-portrait.png', width: 96, height: 118,
                fit: BoxFit.cover, errorBuilder: (_, __, ___) => Container(
                  width: 96, height: 118, color: const Color(0xFFF3E2C8),
                  child: const Icon(Icons.person, size: 56)))),
            const SizedBox(width: 10),
            Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Wrap(spacing: 4, runSpacing: 4, children: [
                pill(frozen ? 'FROZEN' : 'CHECKED-IN', frozen ? Colors.blue : _ok),
                pill('16 Oct 2026 · 07:12 AM', Colors.white, fg: Colors.black87),
              ]),
              const SizedBox(height: 8),
              const Text('Ashwani Kumar Sharma\nVishwakarma',
                style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, height: 1.12)),
              const SizedBox(height: 5),
              const Text('BG215 · 28 Yrs · Male', style: TextStyle(fontSize: 10)),
              const SizedBox(height: 8),
              Wrap(spacing: 5, children: [pill('Active', _ok), pill('Gold Plan', _gold, fg: Colors.black)]),
            ])),
            InkWell(onTap: () => showInfo('Member QR', 'QR pass'),
              child: Image.asset('assets/member-qr.png', width: 58, height: 58,
                errorBuilder: (_, __, ___) => const Icon(Icons.qr_code_2, size: 54))),
          ]),
          const SizedBox(height: 12),
          Row(children: [
            Expanded(child: _actionTile(Icons.wallet, 'Payment', paid ? '₹500 Paid' : '₹500 Due',
              () => showInfo('Payment', paid ? '₹500 Paid' : '₹500 Due'), paid ? _ok : _due)),
            const SizedBox(width: 8),
            Expanded(child: _actionTile(Icons.calendar_month, 'Expires', '24 Oct 2026',
              () => showInfo('Membership expiry', '8 Days Left'), const Color(0xFF9A3412))),
          ]),
          const SizedBox(height: 12),
          const Text('Membership    22 / 30 Days', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 12)),
          const SizedBox(height: 6),
          ClipRRect(borderRadius: BorderRadius.circular(12),
            child: LinearProgressIndicator(value: 22 / 30, minHeight: 13,
              backgroundColor: const Color(0xFF2A211C), color: accent)),
        ])),
        const SizedBox(height: 12),
        panel(Column(children: [
          Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
            const Text('Sponsored', style: TextStyle(fontSize: 10, color: _ok, fontWeight: FontWeight.bold)),
            Text('${slide + 1}/3', style: const TextStyle(fontSize: 10)),
          ]),
          const SizedBox(height: 8),
          if (slide == 0) Image.asset('assets/promo-festival.png', height: 95, fit: BoxFit.cover,
            errorBuilder: (_, __, ___) => const Text('Fitness & wellness · Up to 40% OFF'))
          else Text(slide == 1 ? 'Big Billion Sale · Up to 40% OFF · Fitness Gear'
            : 'BAD GYM LAB · Creatine Stack · 30% off'),
          TextButton(onPressed: () => setState(() => slide = (slide + 1) % 3),
            child: const Text('Next offer')),
        ])),
        const SizedBox(height: 10),
        Row(children: [
          _stat('Attendance', '81%', Icons.calendar_month, IntelSection.cal),
          _stat('Workout', '58 min', Icons.fitness_center, IntelSection.trend),
          _stat('Payment', paid ? 'Paid' : 'Due', Icons.wallet, IntelSection.more),
          _stat('Body', '69.5 kg', Icons.monitor_weight, IntelSection.insights),
        ]),
        const SizedBox(height: 12),
        panel(Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const Text('Attendance Intelligence', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800)),
          const SizedBox(height: 12),
          SingleChildScrollView(scrollDirection: Axis.horizontal, child: Row(
            children: IntelSection.values.map((s) => Padding(
              padding: const EdgeInsets.only(right: 5),
              child: ChoiceChip(label: Text(s.name.toUpperCase()),
                selected: section == s, onSelected: (_) => setState(() => section = s)))).toList())),
          const SizedBox(height: 14),
          if (section == IntelSection.cal) _calendar()
          else if (section == IntelSection.history) _history()
          else if (section == IntelSection.more) Column(children: [
            SwitchListTile(title: const Text('Magenta theme'), value: magenta,
              onChanged: (v) => setState(() => magenta = v)),
            SwitchListTile(title: const Text('Freeze membership'), value: frozen,
              onChanged: (v) => setState(() => frozen = v)),
          ])
          else Text(section == IntelSection.trend ? 'Workout trend' : 'Coach insights'),
        ])),
      ])),
    ),
  );

  Widget _actionTile(IconData icon, String label, String value, VoidCallback onTap, Color color) =>
    Material(color: Colors.white, borderRadius: BorderRadius.circular(14),
      child: InkWell(onTap: onTap, borderRadius: BorderRadius.circular(14),
        child: Padding(padding: const EdgeInsets.all(9), child: Row(children: [
          Icon(icon, size: 20, color: color), const SizedBox(width: 6),
          Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(label, style: const TextStyle(fontSize: 10)),
            Text(value, style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: color)),
          ])),
        ]))));

  Widget _stat(String label, String value, IconData icon, IntelSection next) =>
    Expanded(child: Padding(padding: const EdgeInsets.symmetric(horizontal: 2),
      child: InkWell(onTap: () => setState(() => section = next),
        child: Container(padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 4),
          decoration: BoxDecoration(color: _cream, borderRadius: BorderRadius.circular(15)),
          child: Column(children: [
            Icon(icon, size: 17, color: _due), const SizedBox(height: 4),
            Text(value, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w800)),
            Text(label, style: const TextStyle(fontSize: 9)),
          ]))))));

  Widget _calendar() {
    final days = DateUtils.getDaysInMonth(2026, month);
    final offset = DateTime(2026, month, 1).weekday - 1;
    final marks = [for (var i = 1; i <= days; i++) markFor(month, i)];
    final attended = marks.where((m) => m == DayMark.present || m == DayMark.late).length;
    final tracked = marks.where((m) => m != DayMark.idle).length;
    return Column(children: [
      DropdownButton<int>(value: month, isExpanded: true,
        items: const [DropdownMenuItem(value: 9, child: Text('September 2026')),
          DropdownMenuItem(value: 10, child: Text('October 2026')),
          DropdownMenuItem(value: 11, child: Text('November 2026'))],
        onChanged: (m) { if (m != null) setState(() => month = m); }),
      Text('Attendance ${tracked == 0 ? 0 : (attended * 100 / tracked).round()}%',
        style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
      const SizedBox(height: 10),
      Row(children: ['M','T','W','T','F','S','S'].map((s) => Expanded(
        child: Center(child: Text(s, style: const TextStyle(fontSize: 11))))).toList()),
      const SizedBox(height: 7),
      GridView.builder(shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
        itemCount: offset + days, gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 7, mainAxisSpacing: 7, crossAxisSpacing: 5, childAspectRatio: 1),
        itemBuilder: (context, index) {
          if (index < offset) return const SizedBox.shrink();
          final d = index - offset + 1;
          final mark = markFor(month, d);
          return InkWell(onTap: () => showInfo('Day $d', mark.name),
            child: Container(alignment: Alignment.center,
              decoration: BoxDecoration(shape: BoxShape.circle, color: markColor(mark)),
              child: Text('$d', style: const TextStyle(color: Colors.white,
                fontWeight: FontWeight.bold, fontSize: 12))));
        }),
      const SizedBox(height: 10),
      Wrap(spacing: 12, runSpacing: 8, children: DayMark.values.where((m) => m != DayMark.idle)
        .map((m) => Row(mainAxisSize: MainAxisSize.min, children: [
          CircleAvatar(radius: 5, backgroundColor: markColor(m)),
          const SizedBox(width: 4), Text(m.name, style: const TextStyle(fontSize: 11)),
        ])).toList()),
    ]);
  }

  Widget _history() {
    final days = DateUtils.getDaysInMonth(2026, month);
    final entries = [for (var d = days; d >= 1; d--) if ({DayMark.present, DayMark.late}.contains(markFor(month, d))) d].take(8);
    return Column(children: entries.map((d) => ListTile(
      dense: true, leading: Icon(Icons.check_circle, color: markColor(markFor(month, d))),
      title: Text('$d / $month / 2026'), subtitle: Text(markFor(month, d).name),
    )).toList());
  }
}
