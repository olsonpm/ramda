import _objectAssign from './_objectAssign';

export default /* #__PURE__ */(typeof Object.assign === 'function')
  ? Object.assign
  : _objectAssign;
