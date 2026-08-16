# Mini-Project Submission: Library Catalogue Git Workflow

* **Student Name:** Kanja Delight Wambui  
* **Admission Number:** 166584
* **Repository URL:** [https://github.com/IS-PROJECT-2026/library-catalogue-166584]

---

## 🔍 Conflict Analysis Report

This project successfully engineered, documented, and resolved three distinct types of Git merge conflicts to demonstrate mastery of branch workflows and conflict resolution strategies.

### Conflict 1: Concurrent Edits on the Same Line (Content Conflict)
* **Branch A:** `feat/header-update-a` (Modified the `<title>` element to *"Community Library Catalogue"*).
* **Branch B:** `feat/header-update-b` (Modified the exact same line in `<title>` to *"Public Library Catalogue"*).
* **Resolution Strategy:** Merged Branch A cleanly, then merged Branch B. Resolved the content collision in VS Code by combining/selecting the final title string, removing conflict markers, staging `index.html`, and committing the fix.
* **Evidence:** `/evidence/conflict_evidence_1.png`

### Conflict 2: File Deletion vs. File Modification
* **Branch A:** `refactor/remove-legacy` (Deleted the `legacy-styles.css` file).
* **Branch B:** `fix/update-legacy` (Modified background rules inside `legacy-styles.css`).
* **Resolution Strategy:** Merged Branch A to remove the file on `main`, then attempted to merge Branch B, triggering a modify/delete collision. Resolved by executing `git rm legacy-styles.css` to honor the architectural deletion intent and finalized with a resolution commit.
* **Evidence:** `/evidence/conflict_evidence_2.png`

### Conflict 3: Structural Path Conflict (Relocation Collision)
* **Branch A:** `refactor/move-script` (Moved `app.js` to a new folder path under `assets/js/main.js`).
* **Branch B:** `feat/update-script-original` (Added new helper functions to `app.js` at its original root path).
* **Resolution Strategy:** Merged Branch A successfully. Attempted to merge Branch B, which triggered a path collision. Resolved by migrating the incoming modifications into the new structural path (`assets/js/main.js`), cleaning up the old path, staging the updated path, and committing.
* **Evidence:** `/evidence/conflict_evidence_3.png`

---

## ✅ Verification Checklist
* [x] Kanban Board milestones completed.
* [x] Three conflict evidence screenshots stored in `/evidence/`.
* [x] Clean commit history following Conventional Commits specification.
* [x] Deployed live via GitHub Pages.