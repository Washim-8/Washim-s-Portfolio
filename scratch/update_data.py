import json
import re

with open('projects_data.json', 'r', encoding='utf-8') as f:
    new_projects = json.load(f)

# The javascript array representation
array_str = "export const projects: Project[] = [\n"
for p in new_projects:
    array_str += "  {\n"
    for k, v in p.items():
        if isinstance(v, str):
            # Escape quotes
            escaped_val = v.replace('"', '\\"').replace('\n', '\\n')
            array_str += f'    {k}: "{escaped_val}",\n'
        elif isinstance(v, bool):
            array_str += f'    {k}: {"true" if v else "false"},\n'
        elif isinstance(v, list):
            list_str = ", ".join([f'"{x}"' for x in v])
            array_str += f'    {k}: [{list_str}],\n'
    array_str += "  },\n"
array_str += "];\n"

# Update lib/data.ts
with open('lib/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Update the interface
interface_pattern = r"export interface Project \{.*?\}"
new_interface = """export interface Project {
  id: string;
  name: string;
  category: "AI/ML" | "Web Development" | "Data Science";
  featured?: boolean;
  isMajor?: boolean;
  period?: string;
  association?: string;
  description: string;
  bullets?: string[];
  technologies: string[];
  github: string;
  liveDemo?: string;
}"""
content = re.sub(interface_pattern, new_interface, content, flags=re.DOTALL)

# Update the projects array
array_pattern = r"export const projects: Project\[\] = \[.*?\];"
content = re.sub(array_pattern, array_str, content, flags=re.DOTALL)

with open('lib/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated lib/data.ts")
