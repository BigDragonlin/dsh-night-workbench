/* Registers the sidebar entry and its intentionally empty workbench page. */
window.__ModuleLoader__.load({
  id: '@local/dsh-night-workbench',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const id = 'night-workbench';
    const en = { title: 'Night workbench' };
    const zh = { title: '夜间工作台' };

    function Moon({ size = 16 }) {
      return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
        h('path', { d: 'M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z' }));
    }

    function Page({ t }) {
      return h('main', { 'aria-label': t('title'), style: { height: '100%', background: 'var(--dsw-alias-bg-base)', color: 'var(--dsw-alias-label-primary)' } });
    }

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(id, { en, zh }), 'night workbench translations');
        const t = ctx.locale.bind(id);
        ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: id, locale: id }, Page));
        ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id, order: 15, label: () => t('title'), locale: id }, Moon));
      },
    };
  },
});
