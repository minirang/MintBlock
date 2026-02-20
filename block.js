if (!confirm("민트블록을 허용하시겠습니까?")) throw new Error("취소됬습니다.");
Entry.staticBlocks = [
    {
        category: 'start',
        blocks: [
            'when_run_button_click',
            'when_some_key_pressed',
            'mouse_clicked',
            'mouse_click_cancled',
            'when_object_click',
            'when_object_click_canceled',
            'when_message_cast',
            'message_cast',
            'message_cast_wait',
            'when_scene_start',
            'start_scene',
            'start_neighbor_scene',
            'check_object_property',
            'check_block_execution',
            'switch_scope',
            'is_answer_submited',
            'check_lecture_goal',
            'check_variable_by_name',
            'show_prompt',
            'check_goal_success',
            'positive_number',
            'negative_number',
            'wildcard_string',
            'wildcard_boolean',
            'register_score',
        ],
    },
    {
        category: 'flow',
        blocks: [
            'wait_second',
            'repeat_basic',
            'repeat_inf',
            'repeat_while_true',
            'stop_repeat',
            '_if',
            'if_else',
            'wait_until_true',
            'stop_object',
            'restart_project',
            'when_clone_start',
            'create_clone',
            'delete_clone',
            'remove_all_clones',
        ],
    },
    {
        category: 'moving',
        blocks: [
            'move_direction',
            'bounce_wall',
            'move_x',
            'move_y',
            'move_xy_time',
            'locate_x',
            'locate_y',
            'locate_xy',
            'locate_xy_time',
            'locate',
            'locate_object_time',
            'rotate_relative',
            'direction_relative',
            'rotate_by_time',
            'direction_relative_duration',
            'rotate_absolute',
            'direction_absolute',
            'see_angle_object',
            'move_to_angle',
        ],
    },
    {
        category: 'looks',
        blocks: [
            'show',
            'hide',
            'dialog_time',
            'dialog',
            'remove_dialog',
            'change_to_some_shape',
            'change_to_next_shape',
            'add_effect_amount',
            'change_effect_amount',
            'erase_all_effects',
            'change_scale_size',
            'set_scale_size',
            'flip_x',
            'flip_y',
            'change_object_index',
        ],
    },
    {
        category: 'brush',
        blocks: [
            'brush_stamp',
            'start_drawing',
            'stop_drawing',
            'set_color',
            'set_random_color',
            'change_thickness',
            'set_thickness',
            'change_brush_transparency',
            'set_brush_tranparency',
            'brush_erase_all',
        ],
    },
    {
        category: 'text',
        blocks: ['text_read', 'text_write', 'text_append', 'text_prepend', 'text_flush'],
    },
    {
        category: 'sound',
        blocks: [
            'sound_something_with_block',
            'sound_something_second_with_block',
            'sound_from_to',
            'sound_something_wait_with_block',
            'sound_something_second_wait_with_block',
            'sound_from_to_and_wait',
            'sound_volume_change',
            'sound_volume_set',
            'sound_silent_all',
        ],
    },
    {
        category: 'judgement',
        blocks: [
            'is_clicked',
            'is_press_some_key',
            'reach_something',
            'boolean_basic_operator',
            'boolean_and_or',
            'boolean_not',
        ],
    },
    {
        category: 'calc',
        blocks: [
            'calc_basic',
            'calc_rand',
            'coordinate_mouse',
            'coordinate_object',
            'get_sound_volume',
            'quotient_and_mod',
            'calc_operation',
            'get_project_timer_value',
            'choose_project_timer_action',
            'set_visible_project_timer',
            'get_date',
            'distance_something',
            'get_sound_duration',
            'get_user_name',
            'length_of_string',
            'combine_something',
            'char_at',
            'substring',
            'index_of_string',
            'replace_string',
            'change_string_case',
        ],
    },
    {
        category: 'variable',
        blocks: [
            'variableAddButton',
            'listAddButton',
            'ask_and_wait',
            'get_canvas_input_value',
            'set_visible_answer',
            'get_variable',
            'change_variable',
            'set_variable',
            'show_variable',
            'hide_variable',
            'value_of_index_from_list',
            'add_value_to_list',
            'remove_value_from_list',
            'insert_value_to_list',
            'change_value_list_index',
            'length_of_list',
            'is_included_in_list',
            'show_list',
            'hide_list',
        ],
    },
    {
        category: 'func',
        blocks: ['functionAddButton'],
    },
    {
        category: 'analysis',
        blocks: [
            'analizyDataAddButton',
            'append_row_to_table',
            'insert_row_to_table',
            'delete_row_from_table',
            'set_value_from_table',
            'get_table_count',
            'get_value_from_table',
            'calc_values_from_table',
            'open_table_chart',
            'close_table_chart',
        ],
    },
    {
        category: 'ai_utilize',
        blocks: [
            'aiUtilizeBlockAddButton',
            'aiUtilizeModelTrainButton',
            'audio_title',
            'check_microphone',
            'speech_to_text_convert',
            'speech_to_text_get_value',
            'get_microphone_volume',
            'tts_title',
            'read_text',
            'read_text_wait_with_block',
            'set_tts_property',
            'translate_title',
            'get_translated_string',
            'check_language',
            'video_title',
            'video_draw_webcam',
            'video_check_webcam',
            'video_flip_camera',
            'video_set_camera_opacity_option',
            'video_motion_value',
            'video_toggle_model',
            'video_is_model_loaded',
            'video_number_detect',
            'video_toggle_ind',
            'video_body_part_coord',
            'video_face_part_coord',
            'video_detected_face_info',
        ],
    },
    {
        category: 'expansion',
        blocks: [
            'expansionBlockAddButton',
            'weather_title',
            'check_weather',
            'check_finedust',
            'get_weather_data',
            'get_current_weather_data',
            'get_today_temperature',
            'check_city_weather',
            'check_city_finedust',
            'get_city_weather_data',
            'get_current_city_weather_data',
            'get_today_city_temperature',
            'festival_title',
            'count_festival',
            'get_festival_info',
            'behaviorConductDisaster_title',
            'count_disaster_behavior',
            'get_disaster_behavior',
            'behaviorConductLifeSafety_title',
            'count_lifeSafety_behavior',
            'get_lifeSafety_behavior',
        ],
    },
    {
        category: 'arduino',
        blocks: [
            'arduino_reconnect',
            'arduino_open',
            'arduino_cloud_pc_open',
            'arduino_connect',
            'arduino_download_connector',
            'download_guide',
            'arduino_download_source',
            'arduino_noti',
        ].concat(EntryStatic.DynamicHardwareBlocks),
    }
];
EntryStatic.getAllBlocks = () => {
    return Entry.staticBlocks;
}
const updateCategory = (category, options) => {
    Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
        { category: 'start', visible: true },
        { category: 'flow', visible: true },
        { category: 'moving', visible: true },
        { category: 'looks', visible: true },
        { category: 'brush', visible: true },
        { category: 'text', visible: true },
        { category: 'sound', visible: true },
        { category: 'judgement', visible: true },
        { category: 'calc', visible: true },
        { category: 'variable', visible: true },
        { category: 'func', visible: true },
        { category: 'analysis', visible: true },
        { category: 'ai_utilize', visible: true },
        { category: 'expansion', visible: true },
        { category: 'arduino', visible: false },
        { category: category, visible: true }
    ]);
    for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
        if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == 'entryCategorytext')) {
            $($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
        }
    }
    Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
    Entry.playground.blockMenu._generateCategoryCode(category);
    if (options) {
        if (options.background) {
            $(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
            $(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
            if (options.backgroundSize) {
                $(`#entryCategory${category}`).css('background-size', options.backgroundSize + 'px');
            }
        }
        if (options.name) {
            $(`#entryCategory${category}`)[0].innerText = options.name
        }
    }
}
const addBlock = (blockname, template, color, params, _class, func, skeleton = 'basic') => {
    Entry.block[blockname] = {
        color: color.color,
        outerLine: color.outerline,
        skeleton: skeleton,
        statement: [],
        params: params.params,
        events: {},
        def: {
            params: params.def,
            type: blockname
        },
        paramsKeyMap: params.map,
        class: _class ? _class : 'default',
        func: func,
        template: template,
    }
}
//여기까지가 스페셜 블록에서 퍼온거
//////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-info', '%1', {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {
  params: [
    {
        type: 'Text',
        text: '민트블록 일반버전은 모든 기능을\n마음껏 사용할 수 있는 버전입니다.\n그만큼 위험할수 있으니 주의하세요.',
        align: 'center',
        color: EntryStatic.colorSet.common.TEXT,
    }
],
}, 'text', () => {

}, 'basic_text')
//////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-javascript_functions', '%1', {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {
  params: [
    {
        type: 'Text',
        text: '자바스크립트 기능들',
        align: 'center',
        color: EntryStatic.colorSet.common.TEXT,
    }
],
}, 'text', () => {

}, 'basic_text')
////////////////////////////////////////////////////////////////////////////////////////////////////////
const c1 = '#1fbb87ff';
const o1 = '#3d836cff';
addBlock('console_log', 'console. %2 %1 %3', {
    color: c1,
    outerline: o1,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Dropdown',
            options: [
                ['log', 'log'],
                ['warn', 'warn'],
                ['error', 'error'],
                ['info', 'info'],
                ['debug', 'debug'],
            ],
            fontSize: 11,
            arrowColor: '#27aa7eff',
            value: 'log'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['Hello World!']
        },
    ],
    map: {
        CONTENT: 0,
        TYPE: 1
    },
}, 'text', (sprite, script) => {
const type = script.getValue('TYPE', script);
const content = script.getValue('CONTENT', script);
const consoleMethods = {
    log: console.log,
    warn: console.warn,
    error: console.error,
    info: console.info,
    debug: console.debug,
};
consoleMethods[type](content);
})
/////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('alert', 'alert %1 %2', {
    color: c1,
    outerline: o1,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['서울민트초코가 만들었습니다.']
        },
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
alert(content);
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('clear_console', 'clear console %1', {
    color: c1,
    outerline: o1,
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/start_icon.svg',
            size: 11,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
console.clear();
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('url_decode_or_encode', '%2 URI %1 ', {
    color: c1,
    outerline: o1,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Dropdown',
            options: [
                ['인코드', 'encode'],
                ['디코드', 'decode'],
            ],
            fontSize: 11,
            arrowColor: '#27aa7eff',
            value: 'encode'
        },
    ],
    def: [
        {
            type: 'text',
            params: ['https://playentry.org/']
        },
    ],
    map: {
        CONTENT: 0,
        TYPE: 1
    },
}, 'text', (sprite, script) => {
const type = script.getValue('TYPE', script);
const content = script.getValue('CONTENT', script);
if (type === 'encode') {
    return encodeURIComponent(content);
} else {
    return decodeURIComponent(content);
}
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('open_url', 'URL 열기 %1 %2 %3 로 열기 %4', {
    color: c1,
    outerline: o1,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
                {
            type: 'Dropdown',
            options: [
                ['새탭에서', '_blank'],
                ['바로', '_self'],
            ],
            fontSize: 11,
            arrowColor: '#27aa7eff',
            value: '_blank'
        },
        {
            type: 'Dropdown',
            options: [
                ['noopener,noreferre', 'noopener,noreferre'],
                ['normal', 'normal'],
            ],
            fontSize: 11,
            arrowColor: '#27aa7eff',
            value: 'normal'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['https://minirang.github.io/']
        }
    ],
    map: {
        CONTENT: 0,
        OPTION: 1,
        TYPE: 2,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
const option = script.getValue('OPTION', script);
const type = script.getValue('TYPE', script);
if (type === 'noopener,noreferre') {
    window.open(content, option, 'noopener,noreferre');
}
else {
    window.open(content, option);
}
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('get_browser_type', '브라우저 종류값 %1', {
    color: c1,
    outerline: o1,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return Entry.getBrowserType(); //return 필수
}, 'basic_string_field')
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('copy_text', '%1 복사하기 %2', {
    color: c1,
    outerline: o1,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['하하하']
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
navigator.clipboard.writeText(content)
  .then(() => {
    alert('텍스트가 복사되었습니다: ' + content);
  })
  .catch(() => {
    alert('복사에 실패했습니다.');
  });
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('edit_page_title', '페이지 제목을 %1로 바꾸기 %2', {
    color: c1,
    outerline: o1,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['헤헷']
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
document.title = content;
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('refresh_page', '페이지 새로고침하기 %1', {
    color: c1,
    outerline: o1,
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/start_icon.svg',
            size: 11,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
location.reload();
}, 'basic_without_next')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('ascii', '%1 를 아스키 코드로 변환한 값 (한글자)', {
    color: c1,
    outerline: o1,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ['A']
        },
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
if (content.length === 1) {
    return content.charCodeAt(0);
}
else {
    Entry.toast.alert('아스키 코드 변환 블록 오류', '한 글자만 입력해주세요.');
    Entry.engine.toggleStop();
}
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('trim', '%1 을/를 trim한 값', {
    color: c1,
    outerline: o1,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ['            Hello World!           ']
        },
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
if (content.trim() === content) {
    return content;
}
else{
    content.trim();
    return content.trim();
}
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('unicode', '%1 를 유니코드로 변환한 값 (한글자)', {
    color: c1,
    outerline: o1,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ['A']
        },
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
if (content.length === 1) {
    return 'U+' + content.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
}
else {
    Entry.toast.alert('유니코드 변환 블록 오류', '한 글자만 입력해주세요.');
    Entry.engine.toggleStop();
}
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('prompt', '%1 메시지로 프롬프트 창을 띄웠을때 대답', {
    color: c1,
    outerline: o1,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ['입력']
        },
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
return prompt(content);
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('css', '요소 %1 을 선택하고 CSS %2 를 %3 으로 정하기 %4', {
    color: c1,
    outerline: o1,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['#entryCanvas']
        },
        {
            type: 'text',
            params: ['opacity']
        },
        {
            type: 'text',
            params: ['0.5']
        },
    ],
    map: {
        CONTENT: 0,
        STYLENAME: 1,
        DETAIL: 2,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
const stylename = script.getValue('STYLENAME', script);
const detail = script.getValue('DETAIL', script);
const selected = document.querySelector(content);
selected.style[stylename] = detail;
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('undefined', 'undefined', {
    color: c1,
    outerline: o1,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return undefined;
}, 'basic_string_field')
//////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-extend_entry_functions', '%1', {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {
  params: [
    {
        type: 'Text',
        text: '엔트리 확장 기능들',
        align: 'center',
        color: EntryStatic.colorSet.common.TEXT,
    }
],
}, 'text', () => {

}, 'basic_text')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const c2 = '#75a4e9';
const o2 = '#457bcc';
addBlock('convert-to-binary', '%1 을/를 이진수로 변환한 값', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ['abc']
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
    const encoder = new TextEncoder();
    return Array.from(encoder.encode(content))
        .map(b => b.toString(2).padStart(8, '0'))
        .join(' ');
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('search_to_google', '구글에 %1 검색하기 %2', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['엔트리']
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
window.open("https://www.google.com/search?q=" + content, '_blank');
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('get_dummy_blocks', '더미블록 불러오기 %1', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
Entry.playground.blockMenu._bannedClass.forEach((block)=>Entry.playground.blockMenu.unbanClass(block));
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('entry_toast', '%1 제목의 %2 메시지를 %3 종류로 %4 %5 번 뜨게하고 %6 %7', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Dropdown',
            options: [
                ['주의', 'warning'],
                ['성공', 'success'],
                ['경고', 'alert'],
            ],
            fontSize: 11,
            arrowColor: '#4375c0',
            value: 'warning'
        },
        {
            type: 'Dropdown',
            options: [
                ['조금 후에 자동 삭제되게', 'maintain'],
                ['유지되게', 'auto-dispose'],
            ],
            fontSize: 11,
            arrowColor: '#4375c0',
            value: 'maintain'
        },
        {
            type: 'Block',
            accept: 'string',
            value: '1',
            //def가 잘 안된다면 type이 Block이여도 이렇게 직접적으로 def 설정해도 됨
        },
        {
            type: 'Dropdown',
            options: [
                ['계속 작품 실행하기', 'run'],
                ['정지하기', 'stop'],
            ],
            fontSize: 11,
            arrowColor: '#4375c0',
            value: 'run'
        },
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['제목']
        },
        {
            type: 'text',
            params: ['쓸 내용']
        }
    ],
    map: {
        TITLE: 0,
        CONTENT: 1,
        TYPE: 2,
        OPTION: 3,
        NUMBER: 4,
        RUN: 5,
    },
}, 'text', (sprite, script) => {
const type = script.getValue('TYPE', script);
const title = script.getValue('TITLE', script);
const content = script.getValue('CONTENT', script);
const option = script.getValue('OPTION', script);
const number = script.getValue('NUMBER', script);
const run = script.getValue('RUN', script);
for (let i = 0; i < number; i++) {
    if (option === 'auto-dispose') {
        Entry.toast[type](title, content, 'auto-dispose');
    } else {
        Entry.toast[type](title, content);
    }
if (run === 'stop') {
    Entry.engine.toggleStop();
}
}})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('if_scene_is', '만약 현재 장면이 %1 인가?', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'DropdownDynamic', //이런것도 있었네 menuName을 입력하면 그에 맞게 자동으로 드롭다운 항목이 늘어나고 줄어드는 구조
            value: null,
            menuName: 'scenes',
            fontSize: 11,
            arrowColor: '#4375c0',
        },
    ],
    def: [],
    map: {
        TYPE: 0,
    },
}, 'text', (sprite, script) => {
const type = script.getValue('TYPE', script);
if (Entry.scene.selectedScene.id === type) {
    return true;
} else {
    return false;
}
}, 'basic_boolean_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('timer_name', '초시계 이름', {
    color: c2,
    outerline: o2,
}, {
    params: [],
    def: [],
    map: {
        NAME: 0,
    },
}, 'text', (sprite, script) => {
return Entry.engine.projectTimer.name_
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('set_timer_name', '초시계 이름을 %1 로 정하기 %2', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
            value: '스톱워치', //def쓰기 귀찮아
        },
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        NAME: 0,
    },
}, 'text', (sprite, script) => {
const name = script.getValue('NAME', script);
Entry.engine.projectTimer.setName(name);
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('move_timer', '초시계 위치의 X를 %1 로 Y를 %2 (으)로 정하기 %3', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
            value: '100',
        },
        {
            type: 'Block',
            accept: 'string',
            value: '50',
        },
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        X: 0,
        Y: 1,
    },
}, 'text', (sprite, script) => {
const x = script.getValue('X', script);
const y = script.getValue('Y', script);
Entry.engine.projectTimer.setX(x);
Entry.engine.projectTimer.setY(y * -1);
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('move_variables', '변수 %1를 X %2 Y %3 위치로 옮기기 %4', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'DropdownDynamic',
            value: null,
            menuName: 'variables',
            fontSize: 11,
            arrowColor: '#4375c0',
        },
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        }
    ],
    def: [
        {
            type: 'text',
            params: [20]
        },
        {
            type: 'text',
            params: [13]
        }

    ],
    map: {
        TYPE: 0,
        X: 1,
        Y: 2,
    },
}, 'text', (sprite, script) => {
const type = script.getValue('TYPE', script);
const x = script.getValue('X', script);
const y = script.getValue('Y', script);
const variable = Entry.variableContainer.getVariable(type);
variable?.setX(x);
variable?.setY(y * -1);
Entry.playground.refreshPlayground();
Entry.playground.reloadPlayground();
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('set_fps', '작품 FPS를 %1 (으)로 정하기 %2', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['60']
        },
    ],
    map: {
        NUMBER: 0,
    },
}, 'text', (sprite, script) => {
const number = script.getValue('NUMBER', script);
Entry.FPS = number;
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('entry_console', '엔트리 콘솔로 %1 출력하기 %2', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['엔트리']
        },
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
return Entry.console.print(content);
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('entry_console_clear', '엔트리 콘솔 지우기 %1', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        }
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
Entry.console.clear();
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('is_it_true', '%1 가 참인가?', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: [1]
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
if (content) {
    return true;
}
else {
    return false;
}
}, 'basic_boolean_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('wait_while_true', '%1 인동안 기다리기 %2', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Block',
            accept: 'boolean',
        },
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        BOOLEAN: 0,
    },
}, 'text', async (sprite, script) => {
const boolean = script.getValue('BOOLEAN', script);
{
  if (boolean) {
    return script;
  }
  return script.callReturn();
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('entry_canvas_color_reverse', '엔트리 캔버스 색상 반전하기 %1', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
const canvas = document.querySelector('#entryCanvas');
if (canvas) {
    if (canvas.style.filter === 'invert(100%)') {
        canvas.style.filter = 'invert(0%)';
    }
    else if (canvas.style.filter === 'invert(0%)'){
        canvas.style.filter = 'invert(100%)';
    }
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('canvas_size', '엔트리 캔버스 %1 를 %2 로 정하기 %3', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Dropdown',
            options: [
                ['가로', 'width'],
                ['세로', 'height'],
            ],
            fontSize: 11,
            arrowColor: '#4375c0',
            value: 'width'
        },
        {
            type: 'Block',
            accept: 'string',
            value: '400',
        },
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        TYPE: 0,
        SIZE: 1,
    },
}, 'text', (sprite, script) => {
const type = script.getValue('TYPE', script);
const size = script.getValue('SIZE', script);
Entry.canvas_[type] = size;
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('playground_zoom', '블록 조립소 화면 %1 하기 %2', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Dropdown',
            options: [
                ['확대', 'IN'],
                ['축소', 'OUT'],
                ['원래대로', 'RESET'],
            ],
            fontSize: 11,
            arrowColor: '#4375c0',
            value: 'IN'
        },
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        TYPE: 0,
    },
}, 'text', (sprite, script) => {
const type = script.getValue('TYPE', script);
const controller = Entry.getMainWS().zoomController, mode = controller.ZOOM_MODE;
controller.zoomChange(mode[type]);
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('playground_background_image', '블록 조립소 화면 배경사진을 선택한 파일로 바꾸기 %1', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
let selectedImage = null;
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/*';
fileInput.style.display = 'none';
document.body.appendChild(fileInput);
fileInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = event => {
        selectedImage = event.target.result;
        document.querySelectorAll('.entryBlocklyWorkspace, .entryWorkspaceBoard')
            .forEach(el => {
                el.style.backgroundImage = `url("${selectedImage}")`;
                el.style.backgroundSize = '50px 50px';
                el.style.backgroundPosition = '0 0';
                el.style.backgroundRepeat = 'repeat';
            });
    };
    reader.readAsDataURL(file);
});
fileInput.click();
new MutationObserver(() => {
    if (!selectedImage) return;
    document.querySelectorAll('.entryBlocklyWorkspace, .entryWorkspaceBoard')
        .forEach(el => {
            el.style.backgroundImage = `url("${selectedImage}")`;
            el.style.backgroundSize = '48px 48px';
            el.style.backgroundPosition = '0 0';
            el.style.backgroundRepeat = 'repeat';
        });
}).observe(document.body, { childList: true, subtree: true });
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('get_block_by_blockname', '%1 이름의 블록 불러오기 %2', {
    color: c2,
    outerline: o2,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Indicator',
            img: 'block_icon/flow_icon.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['stop_run']
        }
    ],
    map: {
        BLCNAME: 0,
    },
}, 'text', (sprite, script) => {
const blcname = script.getValue('BLCNAME', script);
const project = Entry.exportProject();
const content = JSON.parse(project.objects[0].script);
content[0][0].type = blcname;
project.objects[0].script = JSON.stringify(content);
Entry.clearProject(); Entry.loadProject(project);
console.log(`블록 ${blcname}(이)가 불러와졌습니다.`);
})
//////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-calc', '%1', {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {
  params: [
    {
        type: 'Text',
        text: '계산',
        align: 'center',
        color: EntryStatic.colorSet.common.TEXT,
    }
],
}, 'text', () => {

}, 'basic_text')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const c7 = '#eb87ad';
const o7 = '#b95d81';
addBlock('power', '%1 의 %2 제곱', {
    color: c7,
    outerline: o7,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: [2]
        },
        {
            type: 'text',
            params: [4]
        }
    ],
    map: {
        BASE: 0,
        EXPONENT: 1,
    },
}, 'text', (sprite, script) => {
const base = script.getValue('BASE', script);
const exponent = script.getValue('EXPONENT', script);
return base ** exponent;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('LCM_LCF', '%1 와 %2 의 %3', {
    color: c7,
    outerline: o7,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Dropdown',
            options: [
                ['최소공배수', 'LCM'],
                ['최대공약수', 'LCF'],
            ],
            fontSize: 11,
            arrowColor: '#da729a',
            value: 'LCM'
        },
    ],
    def: [
        {
            type: 'text',
            params: [12]
        },
        {
            type: 'text',
            params: [6]
        },
    ],
    map: {
        NUM1: 0,
        NUM2: 1,
        TYPE: 2,
    },
}, 'text', (sprite, script) => {
const num1 = parseInt(script.getValue('NUM1', script));
const num2 = parseInt(script.getValue('NUM2', script));
const type = script.getValue('TYPE', script);
let x = num1;
let y = num2;
let temp;
while (y !== 0) {
  temp = x % y;
  x = y;
  y = temp;
}
let lcf = x;
let lcm = (num1 * num2) / lcf;
if (type === "LCM") {
  return lcm;
} else {
  return lcf;
}
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('is_positive_or_nagative', '%1 이 %2 인가?', {
    color: c7,
    outerline: o7,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Dropdown',
            options: [
                ['음수', 'nagative'],
                ['양수', 'positive'],
            ],
            fontSize: 11,
            arrowColor: '#da729a',
            value: 'nagative'
        },
    ],
    def: [],
    map: {
        CONTENT: 0,
        TYPE: 1,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
const type = script.getValue('TYPE', script);
if (type === 'positive') {
    if (content > 0) {
        return true;
    }
    else {
        return false;
    }
}
else {
    if (content < 0) {
        return true;
    }
    else {
        return false;
    }
}
}, 'basic_boolean_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('minus', '- %1', {
    color: c7,
    outerline: o7,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
    ],
    def: [
        {
            type: 'text',
            params: [5]
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
return content * -1;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('infinity', 'infinity', {
    color: c7,
    outerline: o7,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return Infinity;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('-infinity', '-infinity', {
    color: c7,
    outerline: o7,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return -Infinity;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('-0', '-0', {
    color: c7,
    outerline: o7,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return -0;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//그냥 null로 하면 엔트리가 null로 인식해서 블록에 안뜸 그래서 null에 공백 붙임
addBlock('null ', 'null ', {
    color: c7,
    outerline: o7,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return null;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('NaN', 'NaN', {
    color: c7,
    outerline: o7,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return NaN;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('maxvalue', 'Number.MAX_VALUE', {
    color: c7,
    outerline: o7,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return Number.MAX_VALUE;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('minvalue', 'Number.MIN_VALUE', {
    color: c7,
    outerline: o7,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return Number.MIN_VALUE;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('pi', 'pi', {
    color: c7,
    outerline: o7,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return Math.PI;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('e', 'e', {
    color: c7,
    outerline: o7,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return Math.E;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('trig_functions', '%1 의 %2 (라디안)', {
    color: c7,
    outerline: o7,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Dropdown',
            options: [
                ['사인', 'sin'],
                ['코사인', 'cos'],
                ['탄젠트', 'tan'],
                ['코시컨트', 'csc'],
                ['시컨트', 'sec'],
                ['코탄젠트', 'cot'],
                ['아크사인', 'arcsin'],
                ['아크코사인', 'arccos'],
                ['아크탄젠트', 'arctan'],
                ['아크코시컨트', 'arccsc'],
                ['아크시컨트', 'arcsec'],
                ['아크코탄젠트', 'arccot'],
                ['사인에이치', 'sinh'],
                ['코사인에이치', 'cosh'],
                ['탄젠트에이치', 'tanh'],
                ['코시컨트에이치', 'csch'],
                ['시컨트에이치', 'sech'],
                ['코탄젠트에이치', 'coth'],
                ['아르사인에이치', 'arsinh'],
                ['아르코사인에이치', 'arcosh'],
                ['아르탄젠트에이치', 'artanh'],
                ['아르코시컨트에이치', 'arcsch'],
                ['아르시컨트에이치', 'arsech'],
                ['아르코탄젠트에이치', 'arcoth'],
            ],
            fontSize: 11,
            arrowColor: '#da729a',
            value: 'arcoth'
        },
    ],
    def: [],
    map: {
        CONTENT: 0,
        TYPE: 1,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
const type = script.getValue('TYPE', script);
switch (type) {
    case 'sin':
        return Math.sin(content);
    case 'cos':
        return Math.cos(content);
    case 'tan':
        return Math.tan(content);
    case 'csc':
        return 1 / Math.sin(content);
    case 'sec':
        return 1 / Math.cos(content);
    case 'cot':
        return 1 / Math.tan(content);
    case 'arcsin':
        return Math.asin(content);
    case 'arccos':
        return Math.acos(content);
    case 'arctan':
        return Math.atan(content);
    case 'arccsc':
        return Math.asin(1 / content);
    case 'arcsec':
        return Math.acos(1 / content);
    case 'arccot':
        return Math.atan(1 / content);
    case 'sinh':
        return Math.sinh(content);
    case 'cosh':
        return Math.cosh(content);
    case 'tanh':
        return Math.tanh(content);
    case 'csch':
        return 1 / Math.sinh(content);
    case 'sech':
        return 1 / Math.cosh(content);
    case 'coth':
        return 1 / Math.tanh(content);
    case 'arsinh':
        return Math.asinh(content);
    case 'arcosh':
        return Math.acosh(content);
    case 'artanh':
        return Math.atanh(content);
    case 'arcsch':
        return Math.asinh(1 / content);
    case 'arsech':
        return Math.acosh(1 / content);
    case 'arcoth':
        return Math.atanh(1 / content);
}
}, 'basic_string_field')
//////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-project', '%1', {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {
  params: [
    {
        type: 'Text',
        text: '작품',
        align: 'center',
        color: EntryStatic.colorSet.common.TEXT,
    }
],
}, 'text', () => {

}, 'basic_text')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const c3 = '#c07b20';
const o3 = '#866b20';
addBlock('stop_or_pause', '작품 %1 하기 %2', {
    color: c3,
    outerline: o3,
}, {
    params: [
        {
            type: 'Dropdown',
            options: [
                ['정지', 'Stop'],
                ['일시정지', 'Pause'],
            ],
            fontSize: 11,
            arrowColor: '#8f3c15',
            value: 'Stop'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_play.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        TYPE: 0,
    },
}, 'text', (sprite, script) => {
const type = script.getValue('TYPE', script);
if (type === 'Stop') {
    Entry.engine.toggleStop();
}
else {
    Entry.engine.togglePause();
}
}, 'basic_without_next')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('pause_for_seconds', '%1 초동안 작품 일시정지하기 %2', {
    color: c3,
    outerline: o3,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_play.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: [2]
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', async (sprite, script) => {
const content = script.getValue('CONTENT', script);
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
Entry.engine.togglePause();
await wait(content * 1000);
Entry.engine.toggleRun();
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('full_screen', '전체화면 토글 %1', {
    color: c3,
    outerline: o3,
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_play.svg',
            size: 11,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
Entry.engine.toggleFullScreen();
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('set_user_info', '%1 를 %2 로 정하기 %3', {
    color: c3,
    outerline: o3,
}, {
    params: [
        {
            type: 'Dropdown',
            options: [
                ['닉네임', 'nickname'],
                ['id', 'username'],
            ],
            fontSize: 11,
            arrowColor: '#8f3c15',
            value: 'nickname'
        },
        {
            type: 'Block',
            accept: 'string',
            value: '서울민트초코'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_play.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        TYPE: 0,
        CONTENT: 1,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
const type = script.getValue('TYPE', script);
user[type] = content;
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('add_scene', '%1 이름의 장면 추가하기 %2', {
    color: c3,
    outerline: o3,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
            value: '장면 2'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_play.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
Entry.scene.addScene({name: content})
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('add_varible', '%1 이름의 %2 변수 추가하기 %3', {
    color: c3,
    outerline: o3,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
            value: '서울민트초코'
        },
        {
            type: 'Dropdown',
            options: [
                ['일반', 'standard'],
                ['공유', 'share'],
                ['실시간', 'live'],
            ],
            fontSize: 11,
            arrowColor: '#8f3c15',
            value: 'standard'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_play.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        CONTENT: 0,
        LIVE: 1,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
const live = script.getValue('LIVE', script);
if (live === 'standard') {
    Entry.variableContainer.addVariable({name: content, value: 0});
}
else if (live === 'share') {
    Entry.variableContainer.addVariable({name: content, value: 0, isCloud: true});
}
else {
    Entry.variableContainer.addVariable({name: content, value: 0, isRealTime: true});
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('set_var', '변수 %1 를 %2 라고 정하기 %3', {
    color: c3,
    outerline: o3,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
            value: '서울민트초코', //실시간으로 변수를 추가할때 미리 값을 바꿀수 있도록 만든 블록입니다.
        },
        {
            type: 'Block',
            accept: 'string',
            value: 1
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_play.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        VARIABLE: 0,
        CONTENT: 1,
    },
}, 'text', (sprite, script) => {
const variable = script.getValue('VARIABLE', script)
const content = script.getValue('CONTENT', script);
Entry.variableContainer.getVariableByName(variable)?.setValue(content);
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('project_id', '작품 id', {
    color: c3,
    outerline: o3,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return Entry.projectId;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('entry_clipboard_length', '엔트리 작품 클립보드 길이', {
    color: c3,
    outerline: o3,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
if (Entry.clipboard === null) {
    return;
} else {
    return Entry.clipboard.length;
}
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('object_count', '오브젝트 개수', {
    color: c3,
    outerline: o3,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return Entry.container.getAllObjects().length;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('scene_count', '장면 개수', {
    color: c3,
    outerline: o3,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return Entry.scene.getScenes().length;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('open_entry_pages', '엔트리 %1 열기 %2', {
    color: c3,
    outerline: o3,
}, {
    params: [
        {
            type: 'Dropdown',
            options: [
                ['메인 페이지', 'https://playentry.org'],
                ['작품만들기', 'https://playentry.org/ws/new'],
                ['교과형 만들기', 'https://playentry.org/ws/new?type=practical_course'],
                ['학습하기', 'https://playentry.org/learn'],
                ['이야기', 'https://playentry.org/community/entrystory/'],
                ['노팁', 'https://playentry.org/community/tips/list'],
                ['묻답', 'https://playentry.org/community/notice/list/2'],
                ['공지사항', 'https://playentry.org/community/notice/list/1'],
                ['탐험하기', 'https://space.playentry.org'],
                ['챌린지', 'https://playentry.org/challenge/dashboard'],
                ['나의 성과', 'https://playentry.org/challenge/dashboard'],
                ['학급', 'https://playentry.org/group'],
                ['소개', 'https://playentry.org/about'],
                ['다운로드', 'https://playentry.org/download'],
                ['작품 공유하기', 'https://playentry.org/project/list/all?sort=published'],
                ['10m proejct', 'https://playentry.org/10m_project'],
                ['제건 ㅠㅠ', 'https://playentry.org/suggestion/'],
            ],
            fontSize: 11,
            arrowColor: '#8f3c15',
            value: 'https://playentry.org'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_play.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        TYPE: 0,
    },
}, 'text', (sprite, script) => {
const type = script.getValue('TYPE', script);
window.open(type, '_blank')
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-array', '%1', {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {
  params: [
    {
        type: 'Text',
        text: '배열',
        align: 'center',
        color: EntryStatic.colorSet.common.TEXT,
    }
],
}, 'text', () => {

}, 'basic_text')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const c4 = '#5e5e5e'
const o4 = '#252525'
addBlock('split_n', '배열 %1 를 구분자 %2 로 나눴을 때 %3 번째 항목의 값', {
    color: c4,
    outerline: o4,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ["안녕, 엔트리"]
        },
        {
            type: 'text',
            params: [","],
        },
        {
            type: 'text',
            params: ["2"],
        },
    ],
    map: {
        CONTENT: 0,
        SPLIT: 1,
        NUM: 2,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
const split = script.getValue('SPLIT', script);
const num = script.getValue('NUM', script);
  const items = content
    .split(split)
    .map(item => item.trim())
    .filter(item => item !== '');
  if (num < 1 || num > items.length) {
    return null;
  }
  return items[num - 1];
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('split_count', '배열 %1 에서 구분자 %2 로 나눴을때 항목의 개수', {
    color: c4,
    outerline: o4,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ["안녕, 엔트리"]
        },
        {
            type: 'text',
            params: [","],
        },
    ],
    map: {
        CONTENT: 0,
        SPLIT: 1,
    },
}, 'text', (sprite, script) => {
const split = script.getValue('SPLIT', script);
const content = script.getValue('CONTENT', script);
  return content
    .split(split)
    .map(item => item.trim())
    .filter(item => item !== '')
    .length;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-video', '%1', {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {
  params: [
    {
        type: 'Text',
        text: '영상',
        align: 'center',
        color: EntryStatic.colorSet.common.TEXT,
    }
],
}, 'text', () => {

}, 'basic_text')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const c5 = '#ccc91f'
const o5 = '#a7a427'
addBlock('play_video_on_youtube', '%1 ID의 유튜브 영상을 재생하기 %2', {
    color: c5,
    outerline: o5,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_hardwarelite.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ["dQw4w9WgXcQ"]
        },
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
const canvas = document.querySelector('#entryCanvas');
const parentElement = canvas.parentElement;
if (canvas && parentElement) {
  if (window.ytPlayer) {
    window.ytPlayer.destroy();
    window.ytPlayer = null;
    window.ytPlayerReady = false;
  }
  const oldIframe = document.getElementById('entry-youtube-iframe');
  if (oldIframe) {
    oldIframe.remove();
  }
  const youtubeIframe = document.createElement('iframe');
  youtubeIframe.id = 'entry-youtube-iframe';
  youtubeIframe.setAttribute('src', 'https://www.youtube.com/embed/' + content + '?autoplay=1&mute=1&enablejsapi=1');
  youtubeIframe.setAttribute('frameborder', '0');
  youtubeIframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  youtubeIframe.setAttribute('allowfullscreen', '');
  youtubeIframe.style.position = 'absolute';
  youtubeIframe.style.top = '-10';
  youtubeIframe.style.left = '0';
  youtubeIframe.style.zIndex = '10';
  parentElement.appendChild(youtubeIframe);
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  }
  const createPlayer = () => {
    window.ytPlayer = new YT.Player(youtubeIframe, {
      events: {
        onReady: (event) => {
          window.ytPlayer = event.target;
          window.ytPlayerReady = true;
        }
      }
    });
  };
  if (window.YT && window.YT.Player) {
    createPlayer();
  } else {
    window.onYouTubeIframeAPIReady = createPlayer;
  }
  const updateIframeSize = () => {
    const canvasRect = canvas.getBoundingClientRect();
    youtubeIframe.style.width = `${canvasRect.width}px`;
    youtubeIframe.style.height = `${canvasRect.height}px`;
  };
  updateIframeSize();
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      if (entry.target === canvas) {
        updateIframeSize();
      }
    }
  });
  resizeObserver.observe(canvas);
} else {
  console.error("Canvas or its parent element not found.");
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('destroy_video', '재생 취소하기 %1', {
    color: c5,
    outerline: o5,
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_hardwarelite.svg',
            size: 11,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
const youtubeIframe = document.getElementById('entry-youtube-iframe');
if (youtubeIframe) {
  if (window.ytPlayer) {
    window.ytPlayer.destroy();
    window.ytPlayer = null;
    window.ytPlayerReady = false;
  }
  youtubeIframe.remove();
  console.log('YouTube iframe removed.');
} else {
  console.log('No YouTube iframe found.');
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('proceed_or_pause_video', '영상 %1 %2', {
    color: c5,
    outerline: o5,
}, {
    params: [
                {
            type: 'Dropdown',
            options: [
                ['재생하기', 'playVideo'],
                ['일시정지하기', 'pauseVideo'],
            ],
            fontSize: 11,
            arrowColor: '#c4c119',
            value: 'pauseVideo'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_hardwarelite.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        TYPE: 0,
    },
}, 'text', (sprite, script) => {
const type = script.getValue('TYPE', script);
if (window.ytPlayer && window.ytPlayerReady) {
  window.ytPlayer[type]();
}
else {
  Entry.toast.alert('경고', '영상 로드 후 사용해주세요.')
  Entry.engine.toggleStop();
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('move_video_second', '영상 %1 초로 이동하기 %2', {
    color: c5,
    outerline: o5,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_hardwarelite.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: [5]
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
if (window.ytPlayer && window.ytPlayerReady) {
  window.ytPlayer.seekTo(content)
}
else {
  Entry.toast.alert('경고', '영상 로드 후 사용해주세요.')
  Entry.engine.toggleStop();
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('mute_or_unmute_video', '영상 %1 하기 %2', {
    color: c5,
    outerline: o5,
}, {
    params: [
        {
            type: 'Dropdown',
            options: [
                ['음소거', 'mute'],
                ['음소거 해제', 'unMute'],
            ],
            fontSize: 11,
            arrowColor: '#c4c119',
            value: 'mute'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_hardwarelite.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        TYPE: 0,
    },
}, 'text', (sprite, script) => {
const type = script.getValue('TYPE', script);
if (type === 'mute') {
    window.ytPlayer.mute();
}
else {
    window.ytPlayer.unMute();
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('video_opacity', '영상 투명도를 %1 % 로 정하기 %2', {
    color: c5,
    outerline: o5,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_hardwarelite.svg',
            size: 11,
        },
    ],
    def: [
        {
        type: 'text',
        params: [50]
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
const canvas = document.getElementById('entry-youtube-iframe');
if (canvas) {
  canvas.style.opacity = content / 100;
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('video_volume', '영상 소리크기를 %1 (으)로 정하기 %2', {
    color: c5,
    outerline: o5,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_hardwarelite.svg',
            size: 11,
        },
    ],
    def: [
        {
        type: 'text',
        params: [50]
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
if (window.ytPlayer && window.ytPlayerReady) {
  window.ytPlayer.setVolume(content)}
else {
  Entry.toast.alert('경고', '영상 로드 후 사용해주세요.')
  Entry.engine.toggleStop();
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('is_mute', '영상이 음소거 되있는가?', {
    color: c5,
    outerline: o5,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
if (window.ytPlayer && typeof window.ytPlayer.isMuted === 'function') {
  return window.ytPlayer.isMuted();
}
return false;
}, 'basic_boolean_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('get_video_current_time', '현재 영상 초 값', {
    color: c5,
    outerline: o5,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
if (window.ytPlayer && window.ytPlayerReady) {
    return window.ytPlayer.getCurrentTime();
}
else {
    Entry.toast.alert('경고', '영상 로드 후 사용해주세요.')
    Entry.engine.toggleStop();
}
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-iframe', '%1', {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {
  params: [
    {
        type: 'Text',
        text: 'iframe',
        align: 'center',
        color: EntryStatic.colorSet.common.TEXT,
    }
],
}, 'text', () => {

}, 'basic_text')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const c6 = '#501fc2'
const o6 = '#48249b'
addBlock('make_iframe', 'iframe으로 사이트 %1 열기 %2', {
    color: c6,
    outerline: o6,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Indicator',
            img: '../../../uploads/서울민트초코_not_move.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ["https://playentry.org"]
        },
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
const canvas = document.querySelector('#entryCanvas');
const parentElement = canvas.parentElement;
if (canvas && parentElement) {
  const oldIframe = document.getElementById('entry-iframe');
  if (oldIframe) {
    oldIframe.remove();
  }
  const contentIframe = document.createElement('iframe');
  contentIframe.id = 'entry-iframe';
  contentIframe.src = content;
  contentIframe.style.position = 'absolute';
  contentIframe.style.top = '-10';
  contentIframe.style.left = '0';
  contentIframe.style.zIndex = '10';
  contentIframe.style.border = '0';
  parentElement.appendChild(contentIframe);
  const updateIframeSize = () => {
    const canvasRect = canvas.getBoundingClientRect();
    contentIframe.style.width = `${canvasRect.width}px`;
    contentIframe.style.height = `${canvasRect.height}px`;
  };
  updateIframeSize();
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      if (entry.target === canvas) {
        updateIframeSize();
      }
    }
  });
  resizeObserver.observe(canvas);
} else {
  console.error("Canvas or its parent element not found.");
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('remove_iframe', 'iframe 제거하기 %1', {
    color: c6,
    outerline: o6,
}, {
    params: [
        {
            type: 'Indicator',
            img: '../../../uploads/서울민트초코_not_move.svg',
            size: 11,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
const youtubeIframe = document.getElementById('entry-iframe');
if (youtubeIframe) {
  youtubeIframe.remove();
  console.log('iframe removed.');
} else {
  console.log('No iframe found.');
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('iframe_opacity', 'iframe 투명도를 %1 % 로 정하기 %2', {
    color: c6,
    outerline: o6,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            img: '../../../uploads/서울민트초코_not_move.svg',
            size: 11,
        },
    ],
    def: [
        {
        type: 'text',
        params: [50]
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
const iframe = document.getElementById('entry-iframe');
if (iframe) {
  iframe.style.opacity = content / 100;
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('reload_iframe_page', 'iframe 안에 페이지 새로고침하기 %1', {
    color: c6,
    outerline: o6,
}, {
    params: [
        {
            type: 'Indicator',
            img: '../../../uploads/서울민트초코_not_move.svg',
            size: 11,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
document.getElementById("entry-iframe").contentWindow.location.reload();
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-localStorage', '%1', {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {
  params: [
    {
        type: 'Text',
        text: 'localStorage',
        align: 'center',
        color: EntryStatic.colorSet.common.TEXT,
    }
],
}, 'text', () => {

}, 'basic_text')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const c8 = '#14c1c7'
const o8 = '#18acb1'
addBlock('setitem', 'key %1 value %2 추가하기 %3', {
    color: c8,
    outerline: o8,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_keyboard.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['값 1']
        },
        {
            type: 'text',
            params: [5]
        },
    ],
    map: {
        KEY: 0,
        VALUE: 1,
    },
}, 'text', (sprite, script) => {
const key = script.getValue('KEY', script);
const value = script.getValue('VALUE', script);
window.localStorage.setItem(key, value)
console.log('추가 완료')
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('getitem', 'key %1 의 값', {
    color: c8,
    outerline: o8,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ['값 1']
        },
    ],
    map: {
        KEY: 0,
    },
}, 'text', (sprite, script) => {
const key = script.getValue('KEY', script);
return window.localStorage.getItem(key);
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('length', 'localStorage 항목값', {
    color: c8,
    outerline: o8,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
return window.localStorage.length;
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('removeitem', 'key %1 를 localStorage에서 삭제하기 %2', {
    color: c8,
    outerline: o8,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_keyboard.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['값 1']
        },
    ],
    map: {
        KEY: 0,
    },
}, 'text', (sprite, script) => {
const key = script.getValue('KEY', script);
window.localStorage.removeItem(key);
console.log('삭제 완료')
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('clear', 'localStorage 값 전체 삭제하기 %1', {
    color: c8,
    outerline: o8,
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_keyboard.svg',
            size: 11,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
window.localStorage.clear();
console.log('전체 삭제 완료')
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('key', 'index %1 번의 key 값', {
    color: c8,
    outerline: o8,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: [0]
        },
    ],
    map: {
        INDEX: 0,
    },
}, 'text', (sprite, script) => {
const index = script.getValue('INDEX', script);
return window.localStorage.key(index)
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('key_exists', '%1 값이 localStorage에 존재하는가?', {
    color: c8,
    outerline: o8,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ['값 1']
        },
    ],
    map: {
        KEY: 0,
    },
}, 'text', (sprite, script) => {
const key = script.getValue('KEY', script);
if (window.localStorage.getItem(key) !== null) {
    return true;
}
else {
    return false;
}
}, 'basic_boolean_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-fetch', '%1', {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {
  params: [
    {
        type: 'Text',
        text: 'fetch',
        align: 'center',
        color: EntryStatic.colorSet.common.TEXT,
    }
],
}, 'text', () => {

}, 'basic_text')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const c9 = '#ff6f00'
const o9 = '#cc5c00'
addBlock('ip', '자신의 ip주소 값', {
    color: c9,
    outerline: o9,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', async (sprite, script) => {
return (await(await fetch("//httpbin.org/get")).json()).origin
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('fetch', 'fetch %1', {
    color: c9,
    outerline: o9,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ['https://playentry.org/api/servertime']
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', async (sprite, script) => {
const content = script.getValue('CONTENT', script);
try {
    const response = await fetch(content);
    if (!response.ok) {
        return "요청 실패: " + response.status;
    }
    return await response.text();
} catch (e) {
    return "fetch 실패: " + e.message;
}
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('get', '가져오기 %1', {
    color: c9,
    outerline: o9,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ['https://playentry.org/api/servertime']
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', async (sprite, script) => {
const content = script.getValue('CONTENT', script);
const response = await fetch(content);
if (!response.ok) {
    return "요청 실패: " + response.status;
}
return response.text();
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('post', 'POST 요청 %1 데이터 %2', {
    color: c9,
    outerline: o9,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ['https://jsonplaceholder.typicode.com/posts']
        },
        {
            type: 'text',
            params: ['{"title":"Hello","body":"World","userId":1}']
        }
    ],
    map: {
        URL: 0,
        DATA: 1,
    },
}, 'text', async (sprite, script) => {
const url = script.getValue('URL', script);
const data = script.getValue('DATA', script);
try {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    });
    if (!response.ok) {
        return "요청 실패: " + response.status;
    }
    const result = await response.text();
    return result;
} catch (error) {
    return "에러 발생: " + error.message;
}
}, 'basic_string_field')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('post_without_respond', 'POST 요청 %1 데이터 %2 %3', {
    color: c9,
    outerline: o9,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Block',
            accept: 'string',
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_signal.svg',
            size: 11,
        },
    ],
    def: [
        {
            type: 'text',
            params: ['https://jsonplaceholder.typicode.com/posts']
        },
        {
            type: 'text',
            params: ['{"title":"Hello","body":"World","userId":1}']
        }
    ],
    map: {
        URL: 0,
        DATA: 1,
    },
}, 'text', async (sprite, script) => {
const url = script.getValue('URL', script);
const data = script.getValue('DATA', script);
let bodyData;
try {
     bodyData = JSON.stringify(JSON.parse(data));
} catch {
    bodyData = JSON.stringify({ data: data });
}
try {
    await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: bodyData
    });
    return;
} catch (error) {
    console.error("POST 전송 실패:", error.message);
    return;
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-made_of_fun', '%1', {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {
  params: [
    {
        type: 'Text',
        text: '심심해서 만든 블록들',
        align: 'center',
        color: EntryStatic.colorSet.common.TEXT,
    }
],
}, 'text', () => {

}, 'basic_text')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('cute_block', '%1    ', {
    color: '#1fbb87ff',
    outerline: '#3d836cff',
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_play.svg',
            size: 14,
            position: {
                x: 0,
                y: -2,
            },
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
//아무 동작 없음
}, 'basic_event')
//////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('no', '동작없음 %1', {
    color: '#1fbb87ff',
    outerline: '#3d836cff',
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/start_icon.svg',
            size: 55,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
})
//////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('memo', '메모: %1   ', {
    color: '#a0a0a0',
    outerline: '#222222',
}, {
    params: [
        {
            type: 'TextInput',
            value: '주석',
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
})
//////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('open_maker_mypage', '제작자 마이페이지 열기 %1', {
    color: '#000000',
    outerline: '#202020',
}, {
    params: [
        {
            type: 'Indicator',
            img: '../../../uploads/서울민트초코_not_move.svg',
            size: 11,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
window.open('https://playentry.org/profile/62d00ecb8b49cc01e2b68603', '_blank');
})
//////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('helpers_aqu3180', '도움을 주신 분: aqu3180님 %1', {
    color: '#17a6df',
    outerline: '#2e84a7',
}, {
    params: [
        {
            type: 'Indicator',
            img: '../../../uploads/logo.svg',
            size: 11,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
window.open('https://playentry.org/profile/65d07bfd11787000264734c1', '_blank');
})
//////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('helpers_경찰악어씨', '도움을 주신 분: 경찰악어씨 님 %1', {
    color: '#4bc227',
    outerline: '#4da034',
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/start_icon_play.svg',
            size: 11,
        },
    ],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
window.open('https://playentry.org/profile/683c3803cf1a83502cb03fa4', '_blank');
})
///////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-dangerous_blocks', '%1', {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {
  params: [
    {
        type: 'Text',
        text: '위험한 블록들',
        align: 'center',
        color: EntryStatic.colorSet.common.TEXT,
    }
],
}, 'text', () => {

}, 'basic_text')
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('run_javascript_code', '[위험!] 자바스크립트 코드 %1 실행하기', {
    color: '#d90909',
    outerline: '#801717ff',
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ['10']
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
if (confirm('자바스크립트 코드를 실행하시겠습니까? 실행한 코드로 인해 발생하는 문제에 대해 제작자는 책임지지 않습니다.')) {
    if (confirm('정말 실행하시겠습니까?')) {
        eval(content);
    }
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////
Entry.staticBlocks.push({
    category: 'MintBlocks', blocks: [
        'text-info',

        'text-javascript_functions',

        'console_log',
        'alert',
        'clear_console',
        'url_decode_or_encode',
        'open_url',
        'get_browser_type',
        'copy_text',
        'edit_page_title',
        'refresh_page',
        'ascii',
        'trim',
        'unicode',
        'prompt',
        'css',
        'undefined',

        'text-extend_entry_functions',

        'convert-to-binary',
        'search_to_google',
        'get_dummy_blocks',
        'entry_toast',
        'if_scene_is',
        'timer_name',
        'set_timer_name',
        'move_timer',
        'move_variables',
        'set_fps',
        'entry_console',
        'entry_console_clear',
        'is_it_true',
        'wait_while_true',
        'entry_canvas_color_reverse',
        'canvas_size',
        'playground_zoom',
        'playground_background_image',
        'get_block_by_blockname',

        'text-calc',

        'power',
        'LCM_LCF',
        'is_positive_or_nagative',
        'minus',
        'infinity',
        '-infinity',
        '-0',
        'null ',
        'NaN',
        'maxvalue',
        'minvalue',
        'pi',
        'e',
        'trig_functions',

        'text-project',

        'stop_or_pause',
        'pause_for_seconds',
        'full_screen',
        'set_user_info',
        'add_scene',
        'add_varible',
        'set_var',
        'project_id',
        'entry_clipboard_length',
        'object_count',
        'scene_count',
        'open_entry_pages',

        'text-array',

        'split_n',
        'split_count',

        'text-video',

        'play_video_on_youtube',
        'destroy_video',
        'proceed_or_pause_video',
        'move_video_second',
        'mute_or_unmute_video',
        'video_opacity',
        'video_volume',
        'is_mute',
        'get_video_current_time',

        'text-iframe',

        'make_iframe',
        'remove_iframe',
        'iframe_opacity',
        'reload_iframe_page',

        'text-localStorage',

        'setitem',
        'getitem',
        'removeitem',
        'clear',
        'length',
        'key',
        'key_exists',

        'text-fetch',

        'ip',
        'fetch',
        'get',
        'post',
        'post_without_respond',

        'text-made_of_fun',

        'cute_block',
        'no',
        'memo',
        'open_maker_mypage',
        'helpers_aqu3180',
        'helpers_경찰악어씨',

        'text-dangerous_blocks',

        'run_javascript_code',
    ]
});
updateCategory('MintBlocks')
$('head').append(`<style> #entryCategoryMintBlocks 
{ background-image: url(https://playentry.org/uploads/%EC%84%9C%EC%9A%B8%EB%AF%BC%ED%8A%B8%EC%B4%88%EC%BD%94_not_move.svg); 
 background-repeat: no-repeat; 
 border-bottom-right-radius: 6px; 
 border-bottom-left-radius: 6px; 
 margin-bottom: 1px; 
 } .entrySelectedCategory#entryCategoryMintBlocks 
  { background-image: url(https://playentry.org/uploads/%EC%84%9C%EC%9A%B8%EB%AF%BC%ED%8A%B8%EC%B4%88%EC%BD%94_not_move.svg); 
background-color: #15d8aeff;
border-color: #21bb8dff;
color: #ffffffff;
} </style>
`)
$('#entryCategoryMintBlocks').append('민트블록')
alert("민트블록 로딩 완료!");
console.log('%c 민트블록 로딩 완료!', 'color: #15d8aeff; font-weight: bold; font-size: 50px; font-family: Arial;');
console.log('%c 제작자: 서울민트초코', 'color: #15d8aeff; font-weight: bold; font-size: 20px; font-family: Arial;');
const canvas = document.querySelector('#entryCanvas');
canvas.style.filter = 'invert(0%)';
Entry.aiAssistantEnable=true;

// $.get('https://cdn.jsdelivr.net/gh/minirang/MintBlock/block.js')
