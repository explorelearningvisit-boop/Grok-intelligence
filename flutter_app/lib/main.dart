import 'package:flutter/material.dart';
import 'member_dashboard.dart';

void main() => runApp(const GrokApp());

class GrokApp extends StatelessWidget {
  const GrokApp({super.key});
  @override
  Widget build(BuildContext context) => MaterialApp(
    title: 'Member Intelligence',
    debugShowCheckedModeBanner: false,
    theme: ThemeData(useMaterial3: true, fontFamily: 'sans-serif'),
    home: const MemberDashboard(),
  );
}
