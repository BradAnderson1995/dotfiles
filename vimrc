" ------ General Settings ------
set nocompatible " Turn off vim compatibility mode
filetype on " Detect file types
filetype plugin indent on
syntax enable " Syntax highlighting
" Control-X Control-O to open autocomplete box
set omnifunc=syntaxcomplete#Complete
" Leave hidden buffers open
set hidden
set autoread " Reload files changed outside vim

set t_Co=256 " Run in 256-color mode
set number " Show line numbers

" Matchit plugin enhances %
runtime macros/matchit.vim

" Set unix line endings
set fileformat=unix

" Don't redraw screen when not needed
set lazyredraw

" Allow backspacing over everything
set backspace=indent,eol,start

" Keep longer history
set history=700

" Incremental search
set incsearch

" Smart case insensitive search
set ignorecase
set smartcase

" Maintain context around cursor
set scrolloff=7

" Wildmode configuration
set wildmode=longest,list
set wildmenu

" Configure tab behavior
set tabstop=8 softtabstop=4 expandtab shiftwidth=4 smarttab

" Show current position
set ruler

" Show matching brackets
set showmatch

" ------ Plugins ------
" Clone vundle if not present
if empty(glob("~/.vim/bundle/vundle"))
    !git clone https://github.com/gmarik/vundle ~/.vim/bundle/vundle
endif

" Powerline
set rtp+=/usr/lib/python2.7/site-packages/powerline/bindings/vim
python from powerline.vim import setup as powerline_setup
python powerline_setup()
python del powerline_setup

" Always display powerline statusline
set laststatus=2
" Hide default statusline text
set noshowmode "

set rtp+=~/.vim/bundle/vundle
call vundle#begin()

" let Vundle manage Vundle
" required!
Bundle 'gmarik/vundle'

" The bundles you install will be listed here
Bundle 'altercation/vim-colors-solarized'
Bundle 'scrooloose/nerdtree'
Bundle 'scrooloose/syntastic'
Bundle 'scrooloose/nerdcommenter'
Bundle 'gitgutter/Vim'
Bundle 'tpope/vim-fugitive'
Bundle 'tpope/vim-surround'
Bundle 'tpope/vim-commentary'
Bundle 'tpope/vim-repeat'
Bundle 'sjl/gundo.vim'
Bundle 'klen/python-mode'
Bundle 'davidhalter/jedi-vim'
Bundle 'jlanzarotta/bufexplorer'
Bundle 'christoomey/vim-tmux-navigator'
Bundle 'Raimondi/delimitMate'
Bundle 'Valloric/YouCompleteMe'
Bundle 'rdnetto/YCM-Generator'
Bundle 'rust-lang/rust.vim'
Bundle 'phildawes/racer'
Bundle 'pangloss/vim-javascript'
Bundle 'nathanaelkane/vim-indent-guides'
Bundle 'easymotion/vim-easymotion'
Bundle 'L9'
" Bundle 'FuzzyFinder'
Bundle 'kien/ctrlp.vim'
Bundle 'rking/ag.vim'
" Bundle 'taglist.vim'

call vundle#end()

" Run in python using F9
autocmd FileType python nnoremap <buffer> <F9> :exec '!python' shellescape(@%, 1)<cr>

" ------ Plugin Configuration ------
set background=dark
"let g:solarized_termtrans = 1
colorscheme desert
" colorscheme solarized

" Indent Guide configuration
set ts=2 sw=2 et
let g:indent_guides_start_level = 2

" Syntastic configuration
let g:syntastic_aggregate_errors = 1

" Javascript configuration
let g:javascript_enable_dom_htmlcss = 1

" Powerline configuration
let g:powerline_pycmd = "py"
let g:powerline_pyeval = "pyeval"

" SuperTab omnicomplete movement
" let g:SuperTabDefaultCompletionType = "context"

" Documentation
let g:pymode_doc = 1
let g:pymode_doc_key = 'K'

" Linting
let g:pymode_lint = 1
let g:pymode_lint_checker = "pyflakes,pep8"

" Auto check on save
let g:pymode_lint_write = 1

" Support virtualenv
let g:pymode_virtualenv = 1

" Enable breakpoints plugin
let g:pymode_breakpoint = 1
let g:pymode_breakpoint_key = '<leader>b'

" Syntax highlighting
let g:pymode_syntax = 1
let g:pymode_syntax_all = 1
let g:pymode_syntax_indent_errors = g:pymode_syntax_all
let g:pymode_syntax_space_errors = g:pymode_syntax_all

" Don't autofold code
let g:pymode_folding = 0
 
" Rust racer
let g:racer_cmd = "~/dotfiles/racer/target/release/racer"
" Must install Rust source to this location first
let $RUST_SRC_PATH="/usr/local/src/rust/src/"

"------ Keybindings ------
" Plugins
" FuzzyFinder
" Leader-f opens buffer mode
" :FufFile - file mode
" 
" BufferExplorer
" leader-be - Open explorer
" leader-bs - Open horizontal split
" leader-bv - Open vertical split
" t or Shift-Enter - Open in new tab
"   switch between open tabs with gt and gT
"
" Tag List
" Leader-t opens tag list
"
" C-VIm
" I should get this when I have time to learn it
"
" SurroundVim
" [action] s [current] [new] (e.g. cs"' changes " to '
" iw is a text object (so, selecting Hello and pressing ysiw] is [Hello]
" 
" CtrlP
"
" NerdCommenter
" (commas are leaders)
" [count],cc Comment out current line or text selected
" [count],cn Nested comment
" [count],c Toggles comment state of selected lines based on top line
" [count],cm One set of multiline delimiters
" [count],ci Individually toggle comment state of selected lines
" [count],cs Sexy comment (?)
" [count],cy Comments out lines but yanks them first
" ,c$ Comments out from cursor to the end of the line
" ,cA Adds comment delimiters to the end of line insert between them
" ,ca Switches to other set of delimiters
" [count],cu Uncomment selected lines
"
" VimCommentary
" gcc   comment toggle a line
" gc[motion]
"
" Ag.vim
" e    to open file and close the quickfix window
" o    to open (same as enter)
" go   to preview file (open but maintain focus on ag.vim results)
" t    to open in new tab
" T    to open in new tab silently
" h    to open in horizontal split
" H    to open in horizontal split silently
" v    to open in vertical split
" gv   to open in vertical split silently
" q    to close the quickfix window
"
" Easymotion
" ,,w   hightlight words
" ,,f   highlight letters
" ,,s   bidirectional letter search
" ,,b   backwards words

noremap <space> :
inoremap ,, <ESC>  
cnoremap ,, <ESC><ESC> 
" imap ,c <C-X><C-O>
let mapleader=","
" Enable hex mode
map <leader>he :%!xxd<CR>
" Disable hex mode
map <leader>hd :%!xxd -r<CR>
" Prev/next buffer
map <leader>q :bp<CR>
map <leader>w :bn<CR>
" System clipboard cut copy paste
map <C-y> "+y
map <C-y><C-y> "+Y
map <C-p> "+p
map <C-p><C-p> "+P
map <C-x> "+x
map <C-d><C-d> "+dd
" Move between splits
nnoremap <C-j> <C-W><C-j>
nnoremap <C-k> <C-W><C-k>
nnoremap <C-h> <C-W><C-h>
nnoremap <C-l> <C-W><C-l>
set splitbelow
set splitright
" map <leader>w :w<CR>
map <leader>d :NERDTreeToggle<CR>
"map <leader>fc :FufFileWithCurrentBufferDir<CR>
"map <leader>fb :FufBuffer<CR>
"map <leader>ft :FufTag<CR>
"map <leader>t :TlistToggle<CR>
map <leader>ygc :YcmGenerateConfig<CR>
" Ag
map <leader>ag :Ag<space>
" Easymotion
" let g:EasyMotion_do_mapping = 0
let g:EasyMotion_smartcase = 1
nmap s <Plug>(easymotion-s2)
map <leader>j <Plug>(easymotion-j)
map <leader>k <Plug>(easymotion-k)
" Open vimrc
map <leader>v :e $MYVIMRC<CR>
" Update vimrc
map <leader>rr :source ~/.vimrc<CR>

" Return to last edit position when opening files (You want this!)
autocmd BufReadPost *
     \ if line("'\"") > 0 && line("'\"") <= line("$") |
     \   exe "normal! g`\"" |
     \ endif
" Remember info about open buffers on close
 " set viminfo=%M

" Delete trailing white space on save, useful for Python and CoffeeScript ;)
func! DeleteTrailingWS()
    exe "normal mz"
    %s/\s\+$//ge
    exe "normal `z"
endfunc
autocmd BufWrite *.py :call DeleteTrailingWS()
autocmd BufWrite *.coffee :call DeleteTrailingWS()
