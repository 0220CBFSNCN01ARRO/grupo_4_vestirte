#############################################
# Push de la rama actual
git push origin $rama_actual

#############################################
# Volver a un commit anterior, descartando los cambios
git reset --HARD $SHA1

#############################################
# Ver y descargar Ramas remotas
git remote show origin
# Si hay alguna rama de la cual no tengamos los datos aún
git fetch origin
# Obtener la rama remota
git checkout --track -b $rama origin/$rama
# más simple
git checkout -t origin/$rama

git branch -a
# * master
#   remotes/origin/HEAD -> origin/master
#   remotes/origin/baremacion
#   remotes/origin/bootstrap
#   remotes/origin/fallo_registro
#   remotes/origin/master
git checkout -b baremacion remotes/origin/baremacion
#############################################

# Crear una rama basada en el HEAD
git branch $branch

# Crear una nueva rama basada en el branch $other
git checkout -b $new_branch $other

# Eliminar una rama local
git branch -d $branch

# Eliminar una rama remota
git push origin :$branch

# Eliminar las ramas remotas que ya no existan en origin (Ambos comandos hacen lo mismo)
# Ejecutar con --dry-run para ver los cambios que realizará 
git fetch -p
git remote prune origin
#############################################

# Cambiar el nombre de una rama
git branch -m $nombre_rama_anterior $nombre_rama_nuevo

#############################################
# Ignorar el salto de línea en Git http://help.github.com/line-endings/
git config --global core.autocrlf input

#############################################
# Copiar un commit determinado a una rama cualquiera
git checkout $rama
git cherry-pick $SHA1

#############################################
# Trabajando con tags

# Ver los tags locales
git tag 

# Añadir un tag
git tag -a v1.2 $SHA1

# Subir tags al repositorio
git push --tags

##############################################
# Deshacer el último commit (sin haber hecho push)
git reset --soft HEAD~1

# Deshacer el último commit (habiendo hecho ya un push)
git revert HEAD

##############################################
# Subir a la rama Commits parciales (los ficheros que no añado se quedan en el stash y se recuperan luego)
git add $file
git commit -m "Mensaje"
git stash
git pull --rebase origin $rama
git push origin rama
git stash pop

# list commits not pushed to the origin yet
git log origin/master..master

# list remote branches that contain $commit
git branch -r --contains $commit

# Deshacer el último commit (dejándolo como estaba con los archivos añadidos y demás)
git reset --soft HEAD^

# Modificar el último commit (incluye los archivos añadidos)
git commit --ammend -m "Nuevo mensaje"

##############################################
# Reescribiendo la "historia"
#  - Deshacer commits
#  - Unir commits
#  - Reordenar commits
#  - ...
git rebase -i HEAD~10  # Esto mira los 10 últimos

# Y veremos algo como esto:
pick ce2b738 Commit message 1
pick 2a3cdf7 Commit message 2

# Y podremos realizar las siguientes operaciones sobre los commits
# inlcuyendo reordenar los commits
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell

# Establecer la fecha de los commits anterior al rebase => git committer date = git author date
git filter-branch --env-filter 'GIT_COMMITTER_DATE=$GIT_AUTHOR_DATE; export GIT_COMMITTER_DATE' <sha1>..HEAD

##############################################
# Recuperarse de un desastre 
http://www.bluemangolearning.com/blog/2009/03/recovering-from-a-disastrous-git-rebase-mistake/