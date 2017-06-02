# MEF in .net core

## Assembly.LoadFrom

```code
var assemblies = Directory
            .GetFiles(path, WIDGET_FILE_PATTERN, SearchOption.TopDirectoryOnly)
            .Select(AssemblyLoadContext.GetAssemblyName)
            .Select(AssemblyLoadContext.Default.LoadFromAssemblyName)
            .ToList();
```

## Add MEF as a ref

Microsoft.Composition is our old nuget package which was published before we came up with the netstandard and netcoreapp concepts. So the nuget package doesn't explicitly support those frameworks. However, the assemblies in the package are all PCL assemblies, so you can reference them without trouble. To get NuGet to allow you to install the package into your project, add an "imports" statement, like this:

```code
  "frameworks": {
    "netcoreapp1.0": {
      "imports": [ "portable-net45+win8+wp8+wpa81" ]
    }
  },
```

Recently, we also published an updated version of the nuget package which has explicit support for netstandard (and therefore netcoreapp1.0). Right now it is only on our nightly dev feed as a beta version. That package is called "System.Composition" and has version v1.0.31-beta-24230-04. You can use it if you add this feed to your sources. I would recommend just adding the "imports" statement for now.

https://github.com/dotnet/corefx/issues/9788

```code
<PackageTargetFallback Condition=" '$(TargetFramework)' == 'netcoreapp1.1' ">$(PackageTargetFallback);dotnet5.6;portable-net45+win8</PackageTargetFallback> 
```

https://stackoverflow.com/questions/40676344/adding-framework-imports-to-csproj

