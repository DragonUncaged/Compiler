export const LANGUAGE_VERSIONS = {
  c : "10.2.0",
  cpp: "10.2.0",
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  c: `#include <stdio.h>\n\nint main() {\n\tprintf("Hello World\\n");\n\treturn 0;\n}\n`,
  cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n\tcout<<"Hello World";\n\treturn 0;\n}\n`,
  javascript: `console.log('Hello World');\n`,
  typescript: `const message:string = "Hello world!";\nconsole.log(message);\n`,
  python: `print ('Hello World')\n`,
  java: `public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}`,
  csharp: `using System;\nclass HelloWorld {\n\tstatic void Main() {\n\t\tConsole.WriteLine("Hello World");\n\t}\n}`,
  php: `<?php\n\necho "Hello World";\n\n?>`,
};
