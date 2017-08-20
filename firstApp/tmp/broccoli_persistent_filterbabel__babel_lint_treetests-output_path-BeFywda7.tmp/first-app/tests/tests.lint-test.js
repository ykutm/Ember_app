define('first-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/examples/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/examples/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/examples/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/examples/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/home/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/home/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/home/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/home/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/todo/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/todo/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/todo/model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/todo/model-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/todo/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/todo/route-test.js should pass ESLint\n\n');
  });
});