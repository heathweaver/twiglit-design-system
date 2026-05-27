/**
 * Twiglit glossary — included in MCP server instructions.
 * Defines the domain language so agents speak consistently.
 */

export const TWIGLIT_GLOSSARY = `
## Twiglit Glossary

- **Twiglit**: The name of this collaborative task and project management app.
- **Twig**: A single item in the tree — a task, note, project, or any unit of work. The atomic building block.
- **Twiglits**: The children of a twig. Subtasks, sub-items, anything nested underneath.
- **Tree**: The full hierarchical structure of twigs. Every user has a workspace tree.
- **Berry**: The small circle icon to the left of each twig. Click it to zoom into focus mode.
- **Leaf**: The detail panel on the right side — shows details and metadata for the selected twig.
- **Focus mode**: When you zoom into a single twig, seeing only it and its twiglits.
- **Home**: The top-level view showing all root twigs in the workspace.
- **Twigler**: A Twiglit user — someone who uses the app.
- **Workspace**: The root-level container for a user's entire tree. Hidden from the UI.
- **Shared twig**: A twig that has been shared with other twiglers. Shown with a green berry.
- **Multiplied twig**: A twig that appears in multiple places in the tree (mirrored). Shown with a purple berry.
- **Participant**: A twigler added to a twig as a follower — can see and comment but isn't the assignee.
- **Assignee**: The twigler responsible for completing a twig.
- **Owner**: The twigler who created and owns a twig.
`.trim();
