# Contributing to Feminist Tech Card Game

This document outlines the guidelines and workflow to follow when contributing to the project.

## 1. General Workflow

- Create a new issue and assign it
- Create a branch for the issue
- Implement changes and commit
- Push the branch
- Open a pull request (PR)
- Small changes: approve & merge PR yourself
- Bigger changes: issue author requests review, reviewer suggests changes, author implements and pushes changes, reviewer approves the PR, author merges the PR
- Close the issue

## 2. Branches

- `main` is protected: **no direct pushes** allowed. All work goes through PRs.
- Create a new branch for each issue/feature you work on.

**Branch naming convention:**

- type/issueNumber-shortDescription

**Examples:**

- feature/1-initialize-game
- fix/2-socket-reconnect
- clean/3-refactor-component

**Types:**

- `feature` → new functionality
- `fix` → bug fixes
- `clean` → refactoring, formatting, minor non-functional changes

## 3. Issues

- **Create an issue first** before starting work.
- Use the **issue template**:

```
## Summary
What needs to be done and why.

## Acceptance Criteria
- [ ] Key requirement
- [ ] Another requirement
```

## 3. Pull Requests (PRs)

- Open a PR for every branch once your work is ready
- Link the PR to the corresponding issue using Closes #<issue-number>
- Use the **PR template**:

```
## Description
What this PR does.

## Related Issue
closes #

## Acceptance Criteria
- [x] Requirement 1
- [x] Requirement 2

## Notes (OPTIONAL)
Anything the reviewer should know.
```

## 4. Commits

- Use the following commit prefixes:

```
  [Feature] Description of feature
  [Fix] Description of bug fix
  [Clean] Refactor / formatting / minor edits
```

- Examples:

```
  [Feature] Add start game button
  [Fix] Handle socket disconnect edge case
  [Clean] Remove unused imports
```
