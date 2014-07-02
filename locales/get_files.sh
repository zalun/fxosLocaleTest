while read line 
do 
	s=($line)
	echo [${s[1]}] >> date.ini
	echo @import url\(date.${s[1]}.properties\) >> date.ini
	echo >> date.ini
	wget http://mxr.mozilla.org/${s[0]}?raw=1 -O date.${s[1]}.properties
done <../../date_properties.html
