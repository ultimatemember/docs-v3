export const um_module_col = [
  {
    field: 'name',
    use: 'Name',
  },
  {
    field: 'description',
    use: '',

    //Will not be displayed in the table
    //use_in_display: false,
  },
  {
    field: 'version',
    use: 'Version',
  },
]

export const um_module_row = [
  {
    id: 1,
    name: 'bbPress',
    description: '',
    version: '1.0',
  },
]

export const full_table_styling = {
  base_bg_color: 'base_bg_color_class',
  base_text_color: ' base_text_color_class',
  top: {
    title: 'text-red-700 top_title_class',
    elements: {
      main: ' bg-white',
      search: 'text-white top_elements_search_class',
    },
  },
  table_head: {
    table_row: 'text-white bg-white',
    table_data: 'text-white  bg-white',
  },
  table_body: {
    main: 'bg-red-600',
    table_row: 't',
    table_data: 'text-base',
  },
  footer: {
    main: '',
    statistics: {
      main: 'bg-white text-green-900',
      bold_numbers: 'text-yellow-800 font-thin',
    },
    page_numbers: 'bg-red-600 text-white',
  },
}
