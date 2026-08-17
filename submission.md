# Project Submission Report

## 1. Student Details

- **Full Name:** Kanja Delight Wambui
- **GitHub Username:** DelightW
- **Email:** delight.kanja@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/library-catalogue-166584/

---

## 3. Reflection — Grounded in Your Git History

### My Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/library-catalogue-166584/commit/305768ea125891be2adb15be0a02d4d933300ad1
- It cleanly implements a new feature using the conventional commit format (`feat:`) with an explicit scope and descriptive message, ensuring clear traceability on the project board.

### A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/library-catalogue-166584/pull/13
- A terminal editor swap file collision occurred during a merge state, causing the CLI to hang. I recovered by aborting the merge safely (`git merge --abort`), cleaning up stray swap files, and restarting the merge workflow smoothly.

### A Pull Request I'm Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/library-catalogue-166584/pull/12
- I verified that the code changes matched the milestone requirements, ensured all branch protection standards were met, and confirmed that the diff showed a clean, coherent addition of the book grid component.

### D. One Thing You Would Do Differently

- I would establish more granular milestone branches earlier to avoid combining too many CSS layout adjustments into a single pull request.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/library-catalogue-166584/tree/style/2-design-navigation-bar

---

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues
### A. Milestones and Issues
![Milestones and Issues 1](evidence/milestone_screenshot1.png)
![Milestones and Issues 2](evidence/milestone_screenshot2.png)
![Milestones and Issues 3](evidence/milestone_screenshot3.png)

* Active milestones configured with granular task tracking issues.

### B. Project Board
![Project Board](evidence/kanban_board.png)
*  Library Catalogue Kanban project board showing progress across To Do, In Progress, and Done columns.

### C. Branching Architecture
![Branching Architecture](evidence/branch_list.png)
* Remote and local branch list adhering to conventional issue-linked naming conventions.

### D. Pull Requests & Traceability
![Pull Requests & Traceability](evidence/pr_traceability.png)
* Completed pull request showing direct traceability linked to its corresponding development issue.

---

## 5. Merge Conflict Evidence

### Conflict 1 
Concurrent edits on the same line

#### Step 1: Generating the Clash
![Conflict 1 Terminal Warning](evidence/conflict_evidence_1.png)
* Terminal warning output when attempting to merge `feat/header-update-b` into `main` after `feat/header-update-a` had already modified the `<title>` line.

#### Step 2: Inside the Code Editor
![Conflict 1 Markers](evidence/conflict_evidence_1.png)
* Raw conflict markers visible in `index.html` as a result of divergent content edits.

#### Step 3: Resolution & Clean Merge
![Conflict 1 Resolution](evidence/conflict_evidence_1.png)
* Clean resolution state after selecting the final title text, removing markers, and recording the resolution commit.

---

### Conflict 2 
File deletion vs. file modification
Git cannot automatically determine whether to respect the structural deletion of a file on one branch or the simultaneous content updates made to that same file on another branch.

![Conflict 2 Evidence](evidence/conflict_evidence_2.png)
* Terminal state showing the `CONFLICT (modify/delete)` collision on `legacy-styles.css`.

---

### Conflict 3 
Structural path conflict

Moving or renaming a script file to a new directory path while concurrent modifications continue to target its original root path creates a path collision that requires manual path realignment.

![Conflict 3 Evidence](evidence/conflict_evidence_3.png)
* Editor state displaying the path conflict collision when merging relocated script updates against root edits.

