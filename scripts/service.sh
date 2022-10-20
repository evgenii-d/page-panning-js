#!/bin/bash
script_folder=$(dirname $(realpath $0))
user_services=~/".config/systemd/user"

if test $EUID == 0; then
    echo "run as non-root user"
    exit
fi

# apply correct path
sed -i "s|^ExecStart=.*|ExecStart=$script_folder/run_app.sh|" $script_folder/page_panning.service

chmod +x $script_folder/run_app.sh

loginctl enable-linger $(logname)
mkdir -p ~/.config/systemd/user
cp "$script_folder/page_panning.service" "$user_services"
systemctl --user enable page_panning.service
echo "> service enabled"