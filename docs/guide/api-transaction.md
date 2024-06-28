# 事务管理

::: tip 介绍
在对 `Revit` 文档进行修改的时候，需要开启一个文档才可以进行！本文主要介绍扩展包对三种事务类型的扩展。
:::

## 事务（Transaction）

事务，用于提交对文档的修改。

```csharp
TransactionResult result = document.NewTransaction(()=>
{
    //todo 执行其他的业务代码
    Line line = Line.CreateBound(XYZ.Zero, XYZ.Zero + new XYZ(0, 10, 0));
    document.Create.NewDetailCurve(uiDocument.ActiveGraphicalView, line);

    //如果需要对事务进行回滚，扩展包提供了友好的异常，只要直接抛出就可以回滚；
    throw new TransactionRollbackException();
} , "事务的名称")；
```

如果需要对事务的故障进行处理，可以对委托的参数进行配置，如下：

```csharp
TransactionResult result = document.NewTransaction((options)=>
{
    options.SetForcedModalHandling(true);

    //todo 执行其他的业务代码
} , "事务的名称")
```

## 子事务（SubTransaction）

子事务，用于在事务中对文档的局部修改进行提交

```csharp
TransactionResult result = document.NewSubtransaction(()=>
{
    //todo 执行其他的业务代码
    Line line = Line.CreateBound(XYZ.Zero, XYZ.Zero + new XYZ(0, 10, 0));
    document.Create.NewDetailCurve(uiDocument.ActiveGraphicalView, line);

    //如果需要对事务进行回滚，扩展包提供了友好的异常，只要直接抛出就可以回滚；
    throw new TransactionRollbackException();
})
```

## 事务组（TransactionGroup）

事务组，用于将所有事务打包，统一管理事务的提交或者回滚；同事，事务组还提供合并事务的功能，这样做的好处是在历史记录中仅保留一条记录；

```csharp
TransactionResult result = document.NewTransactionGroup(()=>
{
    document.NewTransaction(() =>
    {
        //to do
    });

    //如果需要对事务进行回滚，扩展包提供了友好的异常，只要直接抛出就可以回滚；
    throw new TransactionRollbackException();
} , "事务组的名称")；
```

在上一个无参的事务组方法中，默认对所有事务进行合并；如果希望事务在撤销列表是分开的，可以调用 `options` 参数的委托 ；

```csharp
TransactionResult result = document.NewTransactionGroup((options)=>
{
    document.NewTransaction(() =>
    {
        //to do
    });

    //如果需要对事务进行回滚，扩展包提供了友好的异常，只要直接抛出就可以回滚；
    throw new TransactionRollbackException();
})；
```

## 事务返回值

在扩展包里，所有的事务类型都提供了返回值，扩展方法会对事务内可能发生的异常进行预处理，如果需要对事务的执行结果进行更多业务上的判断，可以获取事务结果，并执行相关的操作

```csharp
TransactionResult result = document.NewTransaction(()=>{ //todo })；

if(result.TransactionStatus == TransactionStatus.Rollback)
{
    //当事务回滚的时候
}

if(result.HasException)
{
    //当事务存在异常的时候
    Exception exception = result.Exception
}

```
