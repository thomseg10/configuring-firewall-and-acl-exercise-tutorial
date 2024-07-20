const fs = require('fs');
const path = require('path');

describe('Iptables rules presence', () => {
  let rules;

  beforeAll(() => {
    const rulesPath = path.join(__dirname, '../../report.json');
    const rulesData = fs.readFileSync(rulesPath, 'utf8');
    rules = JSON.parse(rulesData);
  });

  test('should have -P INPUT DROP', () => {
    expect(rules).toHaveProperty('-P INPUT DROP', 'present');
  });

  test('should have -P OUTPUT ACCEPT', () => {
    expect(rules).toHaveProperty('-P OUTPUT ACCEPT', 'present');
  });

  test('should have -A INPUT -p tcp --dport 22 -j ACCEPT', () => {
    expect(rules).toHaveProperty('-A INPUT -p tcp --dport 22 -j ACCEPT', 'present');
  });

  test('should have -A INPUT -p tcp --dport 80 -j ACCEPT', () => {
    expect(rules).toHaveProperty('-A INPUT -p tcp --dport 80 -j ACCEPT', 'present');
  });

  test('should have -A INPUT -p tcp --dport 443 -j ACCEPT', () => {
    expect(rules).toHaveProperty('-A INPUT -p tcp --dport 443 -j ACCEPT', 'present');
  });

  test('should have -A INPUT -p tcp --dport 80 -m state --state NEW -m recent --set', () => {
    expect(rules).toHaveProperty('-A INPUT -p tcp --dport 80 -m state --state NEW -m recent --set', 'present');
  });

  test('should have -A INPUT -p tcp --syn -m limit --limit 1/s --limit-burst 5 -j ACCEPT', () => {
    expect(rules).toHaveProperty('-A INPUT -p tcp --syn -m limit --limit 1/s --limit-burst 5 -j ACCEPT', 'present');
  });

  test('should have -A INPUT -j DROP', () => {
    expect(rules).toHaveProperty('-A INPUT -j DROP', 'present');
  });
});