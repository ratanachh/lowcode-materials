import snippets from './snippets';
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
export default {
  snippets,
  componentName: 'Col',
  title: "Grid-Col",
  props: [{
    name: 'span',
    title: {
      label: "Number of placeholders",
      tip: "Number of grid occupancy cells"
    },
    propType: 'number',
    setter: {
      componentName: 'NumberSetter',
      props: {
        min: 0,
        max: 24
      }
    }
  }, {
    name: 'order',
    title: {
      label: "grid order",
      tip: "grid order"
    },
    propType: 'number'
  }, {
    name: 'pull',
    title: {
      label: "RightOffset",
      tip: "Move the grid to the right by the number of cells"
    },
    propType: 'number',
    setter: {
      componentName: 'NumberSetter',
      props: {
        min: 0,
        max: 24
      }
    }
  }, {
    name: 'push',
    title: {
      label: "LeftOffset",
      tip: "Move the grid to the left by the number of cells"
    },
    propType: 'number',
    setter: {
      componentName: 'NumberSetter',
      props: {
        min: 0,
        max: 24
      }
    }
  }],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['Row']
      }
    },
    supports: {
      style: true
    },
    advanced: {
      getResizingHandlers: () => {
        return ['e'];
      },
      callbacks: {
        onResizeStart: (e, currentNode) => {
          const parent = currentNode.parent;
          if (parent) {
            const parentNode = parent.getDOMNode();
            if (parentNode) {
              currentNode.parentRect = parentNode.getBoundingClientRect();
            }
          }
          currentNode.beforeSpan = currentNode.getPropValue('span') || 24;
          currentNode.startRect = currentNode.getRect();
        },
        onResize: (e, currentNode) => {
          const {
            deltaX
          } = e;
          const startWidth = currentNode.startRect ? currentNode.startRect.width : currentNode.beforeSpan * (currentNode.parentRect.width / 24);
          let width = startWidth + deltaX;
          if (!currentNode.startRect) {
            currentNode.startRect = {
              width
            };
          }
          width = clamp(width, 0, currentNode.parentRect.width);
          const allowMoveX = Math.round(width - startWidth); // Actual allowed x-axis movement
          currentNode.moveColumn = Math.round(allowMoveX / (currentNode.parentRect.width / 24)); // Columns spanned by move distance
          if (allowMoveX > 0) {
            currentNode.moveColumn++;
          } else {
            currentNode.moveColumn--;
          }
          currentNode.targetColumn = clamp(currentNode.beforeSpan + currentNode.moveColumn, 1, 24);
          // currentNode.setPropValue('span', currentNode.targetColumn);
          const dom = currentNode.getDOMNode();
          dom.style.width = `${Math.round(width)}px`;
          dom.style.flex = 'none';
          dom.style.maxWidth = '100%';
        },
        onResizeEnd: (e, currentNode) => {
          currentNode.getDOMNode().style.cssText = '';
          currentNode.targetColumn = clamp(currentNode.targetColumn, 1, 24);
          currentNode.setPropValue('span', currentNode.targetColumn);
        }
      }
    }
  }
};
