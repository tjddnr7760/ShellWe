#!/bin/bash

# DeployServer-0.0.1-SNAPSHOT.jar가 실행 중이라면 프로세스를 종료합니다.
ps -ef | grep "websocket-0.0.1-SNAPSHOT.jar" | grep -v grep | awk '{print $2}' | xargs kill -9 2> /dev/null

# 종료 이력을 파악하여 적절한 문구를 출력합니다.
if [ $? -eq 0 ];then
    echo "websocket-application Stop Success"
else
    echo "websocket-application Not Running"
fi

# DeployServer-0.0.1-SNAPSHOT.jar를 다시 실행하기 위한 과정을 진행합니다.
echo "websocket-application Restart!"
echo $1

# nohup 명령어를 통해 백그라운드에서 DeployServer-0.0.1-SNAPSHOT.jar를 실행합니다.
nohup java -jar build/libs/websocket-0.0.1-SNAPSHOT.jar > /dev/null 2>&1 &
