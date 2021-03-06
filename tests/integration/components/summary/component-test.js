import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | summary', function(hooks) {
  setupRenderingTest(hooks);

  test('it handles templates with multiple variables', async function(assert) {
    const TEMPLATES = {
      foo: {
        label: 'Foo Label',
        template: 'There were {{foo}} new foos and {{bar}} new bars',
      }
    };
    const SUMMARY = {
      type: {
        code: 'foo',
      },
      payload: {
        foo: 100,
        bar: 500,
      }
    };

    const EXPECTED = 'There were 100 new foos and 500 new bars'

    this.setProperties({TEMPLATES, SUMMARY});

    await render(hbs`<Summary @TEMPLATES={{TEMPLATES}} @summary={{SUMMARY}}/>`);

    assert.dom('[data-test-summary-dek]').hasText(EXPECTED);
  });

  test('it handles data without a corresponding template', async function(assert) {
    const SUMMARY = {
      type: {
        code: 'foo',
        label: 'bar',
      },
      payload: {
        number: 100,
      }
    };

    this.setProperties({SUMMARY});

    await render(hbs`<Summary @summary={{SUMMARY}}/>`);

    assert.dom('[data-test-summary-label]').hasText('bar');
  });

  test('it accepts a chooseSummary action', async function(assert) {
    assert.expect(1);

    this.set('choose', () => assert.ok('called choose'));

    await render(hbs`<Summary @chooseSummary={{choose}}/>`);

    await click('[data-test-plus-button]');
  });
});
