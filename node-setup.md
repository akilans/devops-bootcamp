# NodeJs setup

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# add the below in ~/.zshrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # Load NVM
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # Load NVM bash completion

# validate
source ~/.zshrc
nvm -v
# list all the nodejs versions
nvm ls-remote --lts
nvm install --lts # install the latest lts version
node -v
node install 20
nvm use 20
node -v
npm -v

# create a node app
mkdir node-app
cd node-app
npm init -y

```