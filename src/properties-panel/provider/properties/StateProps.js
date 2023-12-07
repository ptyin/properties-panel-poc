import {
  TextAreaEntry,
  isTextFieldEntryEdited,
} from '@bpmn-io/properties-panel';
import { useContext } from '@bpmn-io/properties-panel/preact/hooks';

import PropertiesPanelContext from '../../PropertiesPanelContext';

function State(props) {
  const { element } = props;
  const { getService } = useContext(PropertiesPanelContext);

  const debounce = getService('debounceInput');

  const options = {
    element,
    id: 'props',
    label: 'Props',
    debounce,
    autoResize: true,
    getValue: (e) => {
      return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    },
    setValue: (value) => {
    },
  };

  return TextAreaEntry(options);
}

export default function StateProps(props) {
  const {
    element,
  } = props;

  return [
    {
      component: State,
      element,
      isEdited: isTextFieldEntryEdited,
    },
  ];
}
