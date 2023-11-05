# 了解金枪鱼

::: tip Introduction
金枪鱼扩展包是一个基于 Revit API 进行开发的开源项目，项目兼容`2016`-`2024`版本的代码，旨在使用扩展包快速开发 Revit 应用程序。
:::

### 源码

代码托管于[Github](https://github.com/)，您可以从仓库 [Tuan Revit API Extensions](https://github.com/shichuyibushishiwu/Tuna.Revit.Extensions)中获取所有有关的代码。如果您对项目有兴趣或者疑问，欢迎给我们提 `PR` 或者 `Issues`.

### Nuget

扩展包发布于 [Nuget](https://www.nuget.org/) 上，方便您直接在项目中使用。扩展包依赖于[Revit_All_Main_Versions_API_x64](https://www.nuget.org/packages/Revit_All_Main_Versions_API_x64/),所以使用了金枪鱼扩展包的项目，不需要再对`dll`程序集进行依赖

```xml
dotnet add package Tuna.Revit.Extension --version 2024.0.11
```

### 多版本配置

在`csproj`中，可以添加对扩展包多版本的支持（使用`SDK Style`风格的项目）。本文配置中，添加了自定义的属性`TunaVersion`，方便于后续扩展包更新（直接修改自定义属性即可）。

```xml
﻿<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
      <Configurations>
        Debug;Release;
        Rvt_16_Debug;Rvt_16_Release;
        Rvt_17_Debug;Rvt_17_Release;
        Rvt_18_Debug;Rvt_18_Release;
        Rvt_19_Debug;Rvt_19_Release;
        Rvt_20_Debug;Rvt_20_Release;
        Rvt_21_Debug;Rvt_21_Release;
        Rvt_22_Debug;Rvt_22_Release;
        Rvt_23_Debug;Rvt_23_Release;
        Rvt_24_Debug;Rvt_24_Release;
    </Configurations>
    <TunaVersion>8</TunaVersion>
  </PropertyGroup>

  <PropertyGroup Condition="'$(Configuration.StartsWith(Rvt_16))'">
    <RvtVersion>2016</RvtVersion>
    <DefineConstants>Rvt_16</DefineConstants>
    <TargetFramework>net452</TargetFramework>
    <Version>2016.2.$(TunaVersion)</Version>
  </PropertyGroup>

  <PropertyGroup Condition="'$(Configuration.StartsWith(Rvt_17))'">
    <RvtVersion>2017</RvtVersion>
    <DefineConstants>Rvt_17</DefineConstants>
    <TargetFramework>net46</TargetFramework>
    <Version>2017.2.$(TunaVersion)</Version>
  </PropertyGroup>

  <PropertyGroup Condition="'$(Configuration.StartsWith(Rvt_18))'">
    <RvtVersion>2018</RvtVersion>
    <DefineConstants>Rvt_18</DefineConstants>
    <TargetFramework>net46</TargetFramework>
    <Version>2018.2.$(TunaVersion)</Version>
  </PropertyGroup>

  <PropertyGroup Condition="'$(Configuration.StartsWith(Rvt_19))'">
    <RvtVersion>2019</RvtVersion>
    <DefineConstants>Rvt_19</DefineConstants>
    <TargetFramework>net47</TargetFramework>
    <Version>2019.0.$(TunaVersion)</Version>
  </PropertyGroup>

  <PropertyGroup Condition="'$(Configuration.StartsWith(Rvt_20))'">
    <RvtVersion>2020</RvtVersion>
    <DefineConstants>Rvt_20</DefineConstants>
    <TargetFramework>net47</TargetFramework>
    <Version>2020.0.$(TunaVersion)</Version>
  </PropertyGroup>

  <PropertyGroup Condition="'$(Configuration.StartsWith(Rvt_21))'">
    <RvtVersion>2021</RvtVersion>
    <DefineConstants>Rvt_21</DefineConstants>
    <TargetFramework>net48</TargetFramework>
    <Version>2021.0.$(TunaVersion)</Version>
  </PropertyGroup>

  <PropertyGroup Condition="'$(Configuration.StartsWith(Rvt_22))'">
    <RvtVersion>2022</RvtVersion>
    <DefineConstants>Rvt_22</DefineConstants>
    <TargetFramework>net48</TargetFramework>
    <Version>2022.0.$(TunaVersion)</Version>
  </PropertyGroup>

  <PropertyGroup Condition="'$(Configuration.StartsWith(Rvt_23))'">
    <RvtVersion>2023</RvtVersion>
    <DefineConstants>Rvt_23</DefineConstants>
    <TargetFramework>net48</TargetFramework>
    <Version>2023.0.$(TunaVersion)</Version>
  </PropertyGroup>

  <PropertyGroup Condition="'$(Configuration.StartsWith(Rvt_24))'">
    <RvtVersion>2024</RvtVersion>
    <DefineConstants>Rvt_24</DefineConstants>
    <TargetFramework>net48</TargetFramework>
    <Version>2024.0.$(TunaVersion)</Version>
  </PropertyGroup>
  ﻿
﻿</Project>

```
