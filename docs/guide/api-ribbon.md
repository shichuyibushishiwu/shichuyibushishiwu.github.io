# 界面面板（Ribbon）

## 面板按钮

> 该扩展类用于快速创建各类的面板按钮

```csharp
//Create ribbon push button
//传入T为继承IExternalCommand的类，panel为需要添加按钮的面板栏,action为设置按钮参数的操作。
Action<PushButtonData> action=new Action<PushButtonData>();
panel.CreatePushButton<TCommand>(action);
```
