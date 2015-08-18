#!/bin/bash
############################
# .make.sh
# This script creates symlinks from the home directory to any desired dotfiles in ~/dotfiles
############################

########## Variables

dir=~/dotfiles                    # dotfiles directory
olddir=~/dotfiles_old             # old dotfiles backup directory
platform=$(uname)
files="
bashrc 
vimrc 
vim 
config 
zshrc 
oh-my-zsh 
private 
scrotwm.conf 
Xresources 
gimp-2.8 
mednafen 
PyCharm40 
themes 
gitconfig 
xmodmap 
pam_environment"
# list of files/folders to symlink in homedir

if [ $(program_installed cinnamon) == 1 ]; then
	files += "cinnamon"
fi
#if [ $(program_installed xfce4) == 1 ]; then
#fi

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

# Installation functions
install_tools () {
    if [ $(program_installed apt-get) == 1 ]; then
        sudo apt-get install terminator
        sudo apt-get install tree
        sudo apt-get install vim
        sudo apt-get install tmux
        sudo apt-get install build-essential
        sudo apt-get install ctags
    elif [ $(program_installed pacman) == 1 ]; then
        sudo pacman -S terminator
        sudo pacman -S tree
        sudo pacman -S vim
        sudo pacman -S tmux
        sudo pacman -S build-essential
        sudo pacman -S ctags
    else 
        echo "Cannot install tools, no compatible package manager."
    fi
}

install_rust_src () {
    if [[ $platform == 'Linux' ]]; then
        if [[ ! -d /usr/local/src/rust/ ]]; then 
            sudo git clone https://github.com/rust-lang/rust.git /usr/local/src/rust
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
	    if [ $(program_installed apt-get) == 1 ]; then
                sudo apt-get install zsh
                install_zsh
            elif [ $(program_installed pacman) == 1 ]; then
                sudo pacman -S zsh
                install_zsh
            else 
                echo "Cannot install zsh, no compatible package manager."
	    fi
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
        if [ $(program_installed update-alternatives) == 1 ]; then
            # Set default terminal emulator
            echo "Select your prefered terminal emulator"
            sudo update-alternatives --config x-terminal-emulator
        fi
    else
        echo "Please install terminator, then re-run this script!"
        exit
    fi
}

prompt_installations() {
    # Guided install of all necessary programs and assets
    if [[ $platform == 'Linux' ]]; then
        echo -n  " Would you like to install powerline fonts? (y/n) "
        read response
        if [ $response == y ] || [ $response == Y ]; then
            git clone http://github.com/powerline/fonts.git
            fonts/install.sh
            rm -r -f fonts
        fi

        echo -n "Default install? (y/n) "
        read response
        if [ $response == y ] || [ $response == Y ]; then
            install_tools
            install_zsh
            install_rust_src
            install_terminator
        else
            echo -n "Would you like to install tools? (y/n) "
            read response
            if [ $response == y ] || [ $response == Y ]; then
                install_tools
            fi
            
            echo -n "Would you like to install zsh? (y/n) "
            read response
            if [ $response == y ] || [ $response == Y ]; then
                install_zsh
            fi
            
            echo -n "Would you like to install rust src? (y/n) "
            read response
            if [ $response == y ] || [ $response == Y ]; then
                install_rust_src
            fi
            
            echo -n "Would you like to install terminator? (y/n) "
            read response
            if [ $response == y ] || [ $response == Y ]; then
                install_terminator
            fi
        fi
    fi
}

function program_installed {
	local return_=1

	type $1 >/dev/null 2>&1 || { local return_=0; }
	
	echo "$return_"
}

prompt_installations
