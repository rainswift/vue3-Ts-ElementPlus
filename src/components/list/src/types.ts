export interface ListItem{
    //头像
    avatar?: string,
    tittle?: string,
    desc?: string,
    time?: string,
    tag?: string,
    tagType?: "" | "success"| "info" | "warning" | "danger"
}

export interface ListOptions{
    tittle?: string,
    content: ListItem[]
}

export interface ActionOptions{
    text?: string,
    icon?: string
}