let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
doautoall SessionLoadPre
silent only
silent tabonly
cd ~/projects/figma/gleamy
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess+=aoO
badd +11 vite.config.ts
badd +12 src/App.tsx
badd +2 src/components/Loader.tsx
badd +3 ./src/assets/index.ts
badd +44 term://~/projects/figma/gleamy//20263:/usr/bin/zsh
badd +1 README.md
badd +10 src/main.tsx
badd +18 src/components/Nav.tsx
badd +41 src/components/AngleScroller.tsx
badd +30 src/index.css
argglobal
%argdel
edit src/components/AngleScroller.tsx
argglobal
balt src/components/Nav.tsx
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
sil! 5,11fold
sil! 21,22fold
sil! 24,28fold
sil! 20,29fold
sil! 19,30fold
sil! 18,31fold
sil! 17,32fold
sil! 35,36fold
sil! 16,36fold
sil! 15,36fold
sil! 43,47fold
sil! 41,48fold
sil! 40,49fold
sil! 39,50fold
sil! 38,51fold
sil! 37,53fold
sil! 4,54fold
let &fdl = &fdl
let s:l = 45 - ((28 * winheight(0) + 21) / 42)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 45
normal! 015|
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
