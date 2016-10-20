
LetsEncrypt - Apache
=====

Install [CertBot](https://certbot.eff.org)
```bash
cd /opt
git clone git@github.com:certbot/certbot.git
cd /opt/certbot certbot-auto --apache -d mxmariner.com -d www.mxmariner.com
```

Update Apache2 Config
```xml
<VirtualHost *:80>
       ServerName mxmariner.com
       ServerAlias www.mxmariner.com
       Redirect permanent / https://mxmariner.com/
</VirtualHost>
<VirtualHost *:443>
    SSLEngine On
    SSLCertificateFile /etc/letsencrypt/live/mxmariner.com/cert.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/mxmariner.com/privkey.pem
    SSLCertificateChainFile /etc/letsencrypt/live/mxmariner.com/chain.pem
    
    ServerName mxmariner.org
    ServerAlias www.mxmariner.org
    
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/mxmariner
    
    # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
    # error, crit, alert, emerg.
    # It is also possible to configure the loglevel for particular
    # modules, e.g.
    #LogLevel info ssl:warn
    
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
    
    # For most configuration files from conf-available/, which are
    # enabled or disabled at a global level, it is possible to
    # include a line for only one particular virtual host. For example the
    # following line enables the CGI configuration for this host only
    # after it has been globally disabled with "a2disconf".
    #Include conf-available/serve-cgi-bin.conf
</VirtualHost>
```