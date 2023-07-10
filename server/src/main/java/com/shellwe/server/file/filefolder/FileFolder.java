package com.shellwe.server.file.filefolder;

public enum FileFolder {

    MEMBER_FOLDER("member/"),   // corresponding to member folder
    SHELL_FOLDER("shell/");     // corresponding to shell folder

    private final String folderName;

    FileFolder(String folderName) {
        this.folderName = folderName;
    }

    public String getFolderName() {
        return this.folderName;
    }
}
