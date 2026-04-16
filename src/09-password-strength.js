/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if (typeof password !== "string" || password.length ===0)
    return "weak"
  let score = 0
  if (password.length >= 8) score = score + 1
  if (password.toLowerCase() !== password)  score = score + 1
  if (password.toUpperCase() !== password) score = score + 1

  let hasNumber = false
  for ( let ch of password ){
    if (ch >='0' && ch<='9'){
      hasNumber = true
      break
  }}
  if (hasNumber) score = score + 1

  let specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  let hasSpecial = false;
  for (let ch of password) {
    if (specialChars.includes(ch)) {
      hasSpecial = true;
      break;
    }
  }
  if (hasSpecial) score=score+1;

  if (score === 5) return 'very strong'
  else if (score === 4) return 'strong'
  else if (score === 2 || score ===3 ) return 'medium'
  else if (score === 0 || score === 1 ) return 'weak'
  else return null
}
