# 外部事件

::: tip 介绍
扩展包提供了一个常规的外部事件服务的接口，您可以直接在 有效上下文 中进行初始化
:::

## 初始化外部事件

如上所说，外部事件的初始化必须在 有效上下文 , 其中包括外部命令或者外部应用等 Revit 可执行过程的代码块中。

```csharp
IExternalEventService service = new ExternalEventService();
```

## 发送命令

服务实现了最基本的回调函数，在外部事件被执行的时候，将会执行委托

```csharp
service.PostCommand((uiapp)=>{
    //todo
})
```

## 发送异步命令

当前服务支持发送异步的命令，满足程序在代码执行顺序和语义上的需求

```csharp
await service.PostCommandAsync((uiapp)=>{
    //todo
})
```

扩展包也支持具有返回值的异步

```csharp
List<Wall> walls = await service.PostCommandAsync<List<Wall>>((uiapp)=>{
    Document document = uiapp.UIDocument.Document;
    return document.GetElement<Wall>();
})
```
