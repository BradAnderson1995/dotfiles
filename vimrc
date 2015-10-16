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
" set fileformat=unix

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
set scrolloff=15

" Wildmode configuration
set wildmode=longest,list,full
set wildmenu
" Make hardcoded tab work
:set wildcharm=<C-Z>

" Configure tab behavior
set tabstop=8 softtabstop=4 expandtab shiftwidth=4 smarttab

" Show current position
set ruler

" Show matching brackets
set showmatch

" Load default menus
source $VIMRUNTIME/menu.vim

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

" Set up Vundle
set rtp+=~/.vim/bundle/vundle
call vundle#begin()

" let Vundle manage Vundle
" required!
Bundle 'gmarik/vundle'

" ------ Install Plugins ------
" --- General ---
" Solarized colors for when I want them
Bundle 'altercation/vim-colors-solarized'
" Directory view
Bundle 'scrooloose/nerdtree'
" Ctags view
Bundle 'majutsushi/tagbar'
" Awesome on-the-fly syntax checking for tons of languages
Bundle 'scrooloose/syntastic'
" Comment toggling with lots of options
Bundle 'scrooloose/nerdcommenter'
" Shows git changes in the side gutter
Bundle 'gitgutter/Vim'
" Git wrapper inside vim
Bundle 'tpope/vim-fugitive'
" Surround things and change surroundings
Bundle 'tpope/vim-surround'
" Simple, quick commenting
Bundle 'tpope/vim-commentary'
" Automatically keep ctags up to date
Bundle 'xolox/vim-misc'
Bundle 'xolox/vim-easytags'
" Make . work for plugins
Bundle 'tpope/vim-repeat'
" Visualize undo tree
Bundle 'sjl/gundo.vim'
" Much nicer buffer management
Bundle 'jlanzarotta/bufexplorer'
" Seamless navigation between tmux panes and vim splits
Bundle 'christoomey/vim-tmux-navigator'
" Parentheses and bracket auto-close
Bundle 'Raimondi/delimitMate'
" Awesome autocompletion for almost everything
Bundle 'Valloric/YouCompleteMe'
Bundle 'rdnetto/YCM-Generator'
" Shows indentation level
Bundle 'nathanaelkane/vim-indent-guides'
" Much nicer navigation
Bundle 'easymotion/vim-easymotion'
" Library required for some plugins
Bundle 'L9'
" Kickass fuzzy finder for whole filesystem
Bundle 'kien/ctrlp.vim'
" Can use Ag from vim
Bundle 'rking/ag.vim'

" --- Language specific ---
" - Python -
Bundle 'klen/python-mode'
Bundle 'davidhalter/jedi-vim'

" - C# -
" Omnicompletion and syntax
Bundle 'OmniSharp/omnisharp-vim'

" - Rust -
" Syntax and autocompletion
Bundle 'rust-lang/rust.vim'
Bundle 'phildawes/racer'

" - Javascript -
Bundle 'pangloss/vim-javascript'

call vundle#end()

" ------ Plugin Configuration ------
" --- General ---
" - Visual -
set background=dark
"let g:solarized_termtrans = 1
colorscheme desert
" colorscheme solarized
hi IndentGuidesOdd ctermbg=darkgreen
hi IndentGuidesEven ctermbg=cyan

" - Utility -
" DelimitMate sane bracing
let delimitMate_expand_cr = 1

" Indent Guide configuration
" set ts=2 sw=2 et
let g:indent_guides_enable_on_vim_startup = 1
let g:indent_guides_start_level = 2

" GitGutter
let g:gitgutter_map_keys = 0

" NERD Commenter
" let g:NERDMenuMode = 1

" Syntastic configuration
let g:syntastic_aggregate_errors = 1

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0

" Powerline configuration
let g:powerline_pycmd = "py"
let g:powerline_pyeval = "pyeval"

" --- Language Specific ---
" - Javascript -
" Javascript configuration
let g:javascript_enable_dom_htmlcss = 1

" - Python -
" Run in python using F9
autocmd FileType python nnoremap <buffer> <F9> :exec '!python' shellescape(@%, 1)<cr>

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

" - Rust -
" Rust racer
let g:racer_cmd = "~/dotfiles/racer/target/release/racer"
" Must install Rust source to this location first
let $RUST_SRC_PATH="/usr/local/src/rust/src/"

"------ Keybindings ------
" Plugins
"
" BufferExplorer
" leader-be - Open explorer
" leader-bs - Open horizontal split
" leader-bv - Open vertical split
" t or Shift-Enter - Open in new tab
"   switch between open tabs with gt and gT
"
" C-Vim
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

" --- Mappings ---
" - General -
noremap <space> :
inoremap ,, <ESC>  
cnoremap ,, <ESC><ESC> 
" imap ,c <C-X><C-O>
let mapleader=","
" Enable hex mode
map <leader>\he :%!xxd<CR>
" Disable hex mode
map <leader>\hd :%!xxd -r<CR>
" Prev/next buffer
map <leader>q :bp<CR>
map <leader>w :bn<CR>
" System clipboard cut copy paste
" map <C-y> "+y
" map <C-y><C-y> "+Y
map <leader>y "+y
map <leader><leader>y "+Y
" map <C-p> "+p
" map <C-p><C-p> "+P
map <leader>p "+p
map <leader><leader>p "+P"
" map <C-x> "+x
" map <C-d><C-d> "+dd
map <leader>x "+x
map <leader><leader>x "+X
" Move between splits
nnoremap <C-j> <C-W><C-j>
nnoremap <C-k> <C-W><C-k>
nnoremap <C-h> <C-W><C-h>
nnoremap <C-l> <C-W><C-l>
" Make splits
nnoremap <leader>- :sp<space>
nnoremap <leader><bar> :vsp<space>
set splitbelow
set splitright
" Open vimrc
map <leader>v :e $MYVIMRC<CR>
" Update vimrc
map <leader>rr :source ~/.vimrc<CR>
" Open GVim menu
map <leader>m :emenu <C-Z><C-Z>

" - Plugins -
" Toggle directory view
map <leader>t :NERDTreeToggle<CR>

" Toggle tagbar
map <leader>ct :TagbarToggle<CR>

" Update ctags
" nnoremap <leader>ct :! ctags -R<CR><CR>

" Jump to a tag
nnoremap <leader>. :CtrlPTag<CR>

" Make a config for YCM from Makefile
map <leader>ygc :YcmGenerateConfig<CR>

" Ag
map <leader>ag :Ag<space>

" Easymotion
" let g:EasyMotion_do_mapping = 0
let g:EasyMotion_smartcase = 1
map <leader>/ <Plug>(easymotion-sn)
omap <leader>/ <Plug>(easymotion-tn)
" map <leader>n <Plug>(easymotion-next)
" map <leader>N <Plug>(easymotion-prev)
map <leader>s <Plug>(easymotion-s)
map <leader><leader>s <Plug>(easymotion-s2)
map <leader>f <Plug>(easymotion-f)
map <leader>l <Plug>(easymotion-lineforward)
map <leader>j <Plug>(easymotion-j)
map <leader>k <Plug>(easymotion-k)
map <leader>h <Plug>(easymotion-linebackward)

" NERD Commenter
" Enter the NERD Commenter menu which can be tabbed through
:map <leader>nc :emenu Plugin.comment.<C-Z><C-Z>

" Gundo
nnoremap <leader>u :GundoToggle<CR>

" silent! call repeat#set("\<Plug>(easymotion)", v:count)

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
