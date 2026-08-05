import React, { ComponentType, forwardRef, Ref } from 'react';
import moment from 'moment';
import { get, set, has } from 'lodash';

function convertProps(
  props: Record<string, any>,
  list: string[],
  mapper: (v: any, key: string) => any,
) {
  const out: Record<string, any> = {};
  list.forEach(key => {
    if (has(props, key)) {
      set(out, key, mapper(get(props, key), key));
    }
  });
  return out;
}

/**
 * Simple wrap with no extra logic.
 * Some component refs are special; wrapping fixes that.
 */
export function withWrap(Comp: ComponentType<any>) {
  return forwardRef((props: any, ref: Ref<any>) => {
    return <Comp {...props} ref={ref} />;
  });
}

/**
 * Some components use React.Children.only on children.
 * Handle that to avoid runtime errors.
 */
export function withSingleChild(
  Comp: ComponentType<any>,
  needsConvert = ['children'],
) {
  return (props: any) => {
    const convertedProps = convertProps(props, needsConvert, prop => {
      let node = React.Children.toArray(prop)[0];
      if (node === null || typeof node !== 'object') {
        node = <div>{node}</div>;
      }
      return node;
    });

    return <Comp {...(props as any)} {...(convertedProps as any)} />;
  };
}

export function withSingleFunctionChild(Comp: ComponentType<any>) {
  return (props: any) => {
    const { children } = props;

    let node;
    if (typeof children === 'function') {
      node = children;
    }
    if (
      Array.isArray(children) &&
      children.length === 1 &&
      typeof children[0] === 'function'
    ) {
      node = children[0];
    }

    if (node) {
      return <Comp {...(props as any)}>{node}</Comp>;
    }
    return <div>{children}</div>;
  };
}

/**
 * moment objects become strings after serialization.
 * Date components need to accept string values.
 */
export function withMomentProps(
  Comp: ComponentType<any>,
  needsConvert = ['value', 'defaultValue'],
) {
  return (props: any) => {
    const convertedProps = convertProps(props, needsConvert, prop => {
      if (prop) {
        if (Array.isArray(prop)) {
          return prop.map(v => (moment.isMoment(v) ? v : moment(v)));
        }
        return moment.isMoment(prop) ? prop : moment(prop);
      }
    });

    return <Comp {...(props as any)} {...(convertedProps as any)} />;
  };
}
