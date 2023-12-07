import { Group } from '@bpmn-io/properties-panel';
import StateProps from './properties/StateProps';


function JsonGroup(element) {
  const entries = [
    ...StateProps({ element }),
  ];

  return {
    id: 'json',
    label: 'Json Props',
    entries,
    shouldOpen: true,
    component: Group,
  };
}

function getGroups(element) {
  const groups = [
    JsonGroup(element),
  ];

  // contract: if a group returns null, it should not be displayed at all
  return groups.filter((group) => group !== null);
}

export default class PropertiesProvider {
  constructor(propertiesPanel) {
    propertiesPanel.registerProvider(this);
  }

  getGroups(element) {
    return (groups) => {
      return [
        ...groups,
        ...getGroups(element),
      ];
    };
  }
}

PropertiesProvider.$inject = ['propertiesPanel'];
