# Git in Action

### Important commands

```bash
git config --global user.name # set name
git config --global user.email # set email
git status            # Show the status of changes as untracked, modified, or staged
git init              # Initialize a new Git repository in the current directory
git status            # Check status again after initializing
git add index.html    # Stage the file 'index.html' for the next commit
git status            # Verify that 'index.html' is now staged
git commit -m "added initial version"  # Commit the staged changes with a message
git log # see the history of changes

# Working directory -> staged (add) -> local repository (commit) -> remote repository
# introduce new change
git status
git diff # what changes you introduced ( compare b/w wd & staging area)
git add index.html
git commit -m "added blue color"
git log

# introduce issues in wd
git status
git restore . # . indicates all

# introduce issues till stages
git status
git add .
git diff --staged
git restore --staged .

# revert changes
git commit -am "added my name" # add + commit in single command(already tracked files only)
git log
git revert $SHA_ID #(latest one)
#If this repo is just local and you don’t care about history
git reset --hard  # dangerous - removes all the commit history


#branches
git branch #list branches * indicates the current active branch
git branch new-feature # create a new branch
git checkout new-feature # switch to new-feature branch
git checkout -n new-feature # create & switch in a single command
git branch # it points to new branch

# branch demo
# in main branch
git init
echo "hello" > file.txt
git add .
git commit -m "Initial commit"

# create a branch
git checkout -b experiment
echo "new feature" >> file.txt
git commit -am "Added feature"

# switch back to main (fast forward merge)
git checkout main
cat file.txt
git merge experiment #Fast-forward merge (no commit in the main branch after experiment branch created)
git branch -d experiment # delete a feature branch


# merge commit demo
git checkout -b akilan
echo "akilan" > file.txt 
git add .
git commit -m "added name"

# introduce change in master
git checkout main
echo "hello" > file.txt
git add .
git commit -m "added hello"

git merge akilan
# fix conflicts
git commit -am "merged with akilan branch"
```
