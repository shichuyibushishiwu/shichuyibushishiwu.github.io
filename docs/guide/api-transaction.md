# 事务管理

## 事务（Transaction）

> Document 下的扩展方法，可以用于快速的开启事务，而所执行的代码以委托的形式代入。

```C#
document.NewTransaction(()=>
{
    //todo
})
```

## 子事务（SubTransaction）

```C#
document.NewTransaction(()=>
{
    //todo
})
```

## 事务组（TransactionGroup）

> Document 下的扩展方法，可以用于将所有事务打包，这样做法的好处是在历史记录中仅保留一条记录。

> 即所有事务的操作打包为一个完成的事务组。

```C#
document.NewTransaction(()=>
{
    //todo
})
```
