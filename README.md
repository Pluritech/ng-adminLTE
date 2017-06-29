## Panel-Sample

### Angular2 Administrative Panel with AdminLTE Template

This project is a starter Angular2 project of an administrative panel with AdminLTE template.

### How to use?

* Clone the repository
* Rename folder, package.json
* Delete .git repository
* Start new git
* Configurate your project

### Configuration the project

Open app/configuration.ts and fill the following fields.
```typescript
export const configuration = {
  projectName : {
    firstName: 'Project',
    lastName: 'Name'
  },
  localStorageKey: 'PROJECT-NAME-APP',
  logoPath: 'assets/panel.png',
  skin: 'skin-blue'
};
```
The avaiable skins are from AdminLTE template. So, you can access the documentation [here](https://adminlte.io/themes/AdminLTE/documentation/index.html)


