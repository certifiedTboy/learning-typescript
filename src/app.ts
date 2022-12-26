/// <reference path="nameSpaces/models/drag-drop.ts" />
/// <reference path="nameSpaces/models/project.ts" />
/// <reference path="nameSpaces/state/project-state.ts" />
/// <reference path="nameSpaces/utils/validation.ts" />
/// <reference path="nameSpaces/decorators/autobind.ts" />
/// <reference path="nameSpaces/components/project-input.ts" />
/// <reference path="nameSpaces/components/project-list.ts" />



namespace App {
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}
