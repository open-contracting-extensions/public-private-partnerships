
QUnit.test( "Test Flatten All", function( assert ) {
  var test_data_old = {
    "key": "value",
    "key_2": "value_2",
    "list_obj": [{"id": 1, "nested": "nested_value"}],
    "list_obj_2": [{"id": 1, "nested": "nested_value"}],
    "list_obj_3": [{"id": 1, "nested": "nested_value"}],
    "list_obj_4": [{"id": 1, "nested": "nested_value"}, {"id": 2, "nested": "nested_value"}],
    "list_string": ["a", "b", "c"],
  }
  var test_data_new = {
    "key": "value",
    "key_2": "changed_value_2",
    "key_3": "new_value_3",
    "list_obj": [{"id": 1, "nested": "nested_value"}],
    "list_obj_2": [{"id": 1, "nested": "nested_value_new"}],
    "list_obj_3": [{"id": 1, "nested": "nested_value"},{"id": 2, "nested": "nested_value"}],
    "list_obj_4": [{"id": 1, "nested": "nested_value"}, {"id": 2, "nested": "nested_value_new"}],
    "list_obj_new": [{"id": 1, "nested": "nested_value"}],
    "list_string": ["a", "b", "c"],
  }
  var test_data_old_flat = flatten_all(test_data_old)
  var test_data_new_flat = flatten_all(test_data_new)

  var result = get_changes(test_data_old_flat, test_data_new_flat)

  var expected_result = {
    "[\"key_2\"]": "changed",
    "[\"key_3\"]": "new",
    "[\"list_obj_2\",[1],\"nested\"]": "changed",
    "[\"list_obj_2\",[1]]": "changed",
    "[\"list_obj_2\"]": "changed",
    "[\"list_obj_3\",[2]]": "new",
    "[\"list_obj_3\"]": "changed",
    "[\"list_obj_4\",[2],\"nested\"]": "changed",
    "[\"list_obj_4\",[2]]": "changed",
    "[\"list_obj_4\"]": "changed",
    "[\"list_obj_new\"]": "new",
    "[\"list_string\"]": "changed"
  }
  assert.deepEqual(result, expected_result)
});

QUnit.test( "Test Augment Path", function( assert ) {
  var test_data = {
    "key": "value",
    "key_2": "changed_value_2",
    "key_3": "new_value_3",
    "list_obj": [{"id": 1, "nested": "nested_value"}],
    "list_obj_2": [{"id": 1, "nested": "nested_value_new"}],
    "list_obj_3": [{"id": 1, "nested": "nested_value"},{"id": 2, "nested": "nested_value"}],
    "list_obj_4": [{"id": 1, "nested": "nested_value"}, {"id": 2, "nested": "nested_value_new"}],
    "list_obj_new": [{"id": 1, "nested": "nested_value"}],
    "list_string": ["a", "b", "c"],
  }
  var expected = 
    {
  "__path": "[]",
  "key": "value",
  "key_2": "changed_value_2",
  "key_3": "new_value_3",
  "list_obj": [{"__path": "[\"list_obj\",[1]]", "id": 1, "nested": "nested_value"}],
  "list_obj_2": [{"__path": "[\"list_obj_2\",[1]]","id": 1,"nested": "nested_value_new"}],
  "list_obj_3": [{"__path": "[\"list_obj_3\",[1]]","id": 1,"nested": "nested_value"},{"__path": "[\"list_obj_3\",[2]]","id": 2,"nested": "nested_value"}],
  "list_obj_4": [{"__path": "[\"list_obj_4\",[1]]","id": 1,"nested": "nested_value"},{"__path": "[\"list_obj_4\",[2]]","id": 2,"nested": "nested_value_new"}],
  "list_obj_new": [{"__path": "[\"list_obj_new\",[1]]","id": 1,"nested": "nested_value"}],
  "list_string": ["a","b","c"  ]
}

  var result = augment_path(test_data)

  assert.deepEqual(result, expected)
});

