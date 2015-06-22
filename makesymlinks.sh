#!/bin/bash
############################
# .make.sh
# This script creates symlinks from the home directory to any desired dotfiles in ~/dotfiles
############################

########## Variables

dir=~/dotfiles                    # dotfiles directory
olddir=~/dotfiles_old             # old dotfiles backup directory
platform=$(uname)
files="bashrc vimrc vim config zshrc oh-my-zsh private scrotwm.conf Xresources cinnamon gimp-2.8 mednafen PyCharm40 themes gitconfig xmodmap pam_environment"
# list of files/folders to symlink in homedir

##########

# create dotfiles_old in homedir
echo -n "Creating $olddir for backup of any existing dotfiles in ~ ..."
mkdir -p $olddir
echo "done"

# change to the dotfiles directory
echo -n "Changing to the $dir directory ..."
cd $dir
echo "done"

# move any existing dotfiles in homedir to dotfiles_old directory, then create symlinks from the homedir to any files in the ~/dotfiles directory specified in $files
for file in $files; do
    echo "Moving any existing dotfiles from ~ to $olddir"
    mv ~/.$file ~/dotfiles_old/
    echo "Creating symlink to $file in home directory."
    ln -s $dir/$file ~/.$file
done

if [[ $platform == 'Linux' ]]; then
    echo -n  " Would you like to install powerline fonts? (y/n) "
    read response
    if [ $response == y || $response == Y ]; then
        git clone http://github.com/powerline/fonts.git
        fonts/install.sh
        rm -r -f fonts
    fi
fi

install_tools () {
    yes | sudo apt-get install terminator
    yes | sudo apt-get install tree
    yes | sudo apt-get install vim
    yes | sudo apt-get install tmux
    yes | sudo apt-get install build-essential
    yes | sudo apt-get install ctags
}

install_rust_src () {
if [[ $platform == 'Linux' ]]; then
    if [[ ! -d /usr/local/src/rust/ ]]; then 
        sudo git clone https://github.com/rust-lang/rust.git /usr/local/src
    else
        echo "Rust source is installed"
    fi
fi
}

install_zsh () {
# Test to see if zshell is installed.  If it is:
if [ -f /bin/zsh -o -f /usr/bin/zsh ]; then
    # Clone my oh-my-zsh repository from GitHub only if it isn't already present
    if [[ ! -d $dir/oh-my-zsh/ ]]; then
        git clone http://github.com/robbyrussell/oh-my-zsh.git
    fi
    # Set the default shell to zsh if it isn't currently set to zsh
    if [[ ! $(echo $SHELL) == $(which zsh) ]]; then
        chsh -s $(which zsh)
    fi
else
    # If zsh isn't installed, get the platform of the current machine
    platform=$(uname);
    # If the platform is Linux, try an apt-get to install zsh and then recurse
    if [[ $platform == 'Linux' ]]; then
        yes | sudo apt-get install zsh
        install_zsh
    # If the platform is OS X, tell the user to install zsh :)
    elif [[ $platform == 'Darwin' ]]; then
        echo "Please install zsh, then re-run this script!"
        exit
    fi
fi
}

install_terminator () {
# Test to see if terminator is installed. If it is:
if [ -f /usr/bin/terminator ]; then
    # Set default terminal emulator
    echo "Select your prefered terminal emulator"
    sudo update-alternatives --config x-terminal-emulator
else
    echo "Please install terminator, then re-run this script!"
    exit
fi
}

echo -n "Would you like to install tools? (y/n) "
read response
if [ $response == y || $response == Y ]; then
    install_tools
    install_zsh
    install_rust_src
    install_terminator
fi
