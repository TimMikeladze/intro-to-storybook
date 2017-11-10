import { compose, withHandlers, withState } from 'recompose';
import { merge, isEmpty } from 'lodash';

export default compose(
  withState('selectedId', 'setSelectedId', props => (!isEmpty(props.items) ? props.items[0].id : null)),
  withState('readStatusMap', 'setReadStatusMap', {}),
  withHandlers({
    handleSelect: props => id => {
      props.setSelectedId(id);
    },
    handleSetReadStatus: props => (event, id, isRead) => {
      event.stopPropagation();
      props.setReadStatusMap(merge(
        {},
        props.readStatusMap,
        {
          [id]: !isRead,
        },
      ));
    },
  }),
);
