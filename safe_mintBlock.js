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
addBlock('text-javascript-functions', '%1', {
			color: EntryStatic.colorSet.common.TRANSPARENT,
    outerline: EntryStatic.colorSet.common.TRANSPARENT
}, {
    params: [
        {
            type: 'Text',
            text: '자바스크립트 기능들',
            color: EntryStatic.colorSet.common.TEXT,
            class: 'bold',
            align: 'right',
        }
    ],
    def: [],
    map: {},
})
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
addBlock('open_url', 'open URL %1 %2', {
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
            params: ['https://minirang.github.io/']
        }
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
window.open('https://playentry.org/redirect?external=' + content, '_blank');
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
navigator.clipboard.writeText(content);
alert('텍스트가 복사되었습니다: ' + content);
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
//////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-extend-entry-functions', '%1', {
			color: EntryStatic.colorSet.common.TRANSPARENT,
    outerline: EntryStatic.colorSet.common.TRANSPARENT
}, {
    params: [
        {
            type: 'Text',
            text: '엔트리 확장 기능',
            color: EntryStatic.colorSet.common.TEXT,
            class: 'bold',
            align: 'right',
        }
    ],
    def: [],
    map: {},
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const c2 = 'rgb(117, 164, 233)';
const o2 = 'rgb(69, 123, 204)';
addBlock('convert-to-binary', '%1을/를 이진수로 변환한 값', {
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
addBlock('full_screen', '전체화면 토글 %1', {
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
Entry.engine.toggleFullScreen();
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
addBlock('entry_toast', '%1 제목의 %2 메시지를 %3 종류로 %4 %5 번 뜨게하기 %6', {
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
            arrowColor: '#27aa7eff',
            value: 'warning'
        },
        {
            type: 'Dropdown',
            options: [
                ['유지되게', 'auto-dispose'],
                ['조금 후에 자동 삭제되게', 'maintain'],
            ],
            fontSize: 11,
            arrowColor: '#27aa7eff',
            value: 'auto-dispose'
        },
        {
            type: 'Block',
            accept: 'string',
            value: '1',
            //def가 잘 안된다면 type이 Block이여도 이렇게 직접적으로 def 설정해도 됨
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
    },
}, 'text', (sprite, script) => {
const type = script.getValue('TYPE', script);
const title = script.getValue('TITLE', script);
const content = script.getValue('CONTENT', script);
const option = script.getValue('OPTION', script);
const number = script.getValue('NUMBER', script);
for (let i = 0; i < number; i++) {
    if (option === 'auto-dispose') {
        Entry.toast[type](title, content, 'auto-dispose');
    } else {
        Entry.toast[type](title, content);
    }
}})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('if_scene_is', '만약 현재 장면이 %1 이라면', {
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
            params: ['장면 1']
        },
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
if (Entry.scene.selectedScene.name === content) {
    return true;
} else {
    return false;
}
}, 'basic_boolean_field')
//////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('text-made-of-fun', '%1', {
			color: EntryStatic.colorSet.common.TRANSPARENT,
    outerline: EntryStatic.colorSet.common.TRANSPARENT
}, {
    params: [
        {
            type: 'Text',
            text: '심심해서 만든 블록들',
            color: EntryStatic.colorSet.common.TEXT,
            class: 'bold',
            align: 'right',
        }
    ],
    def: [],
    map: {},
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////
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
addBlock('text-dangerous-blocks', '%1', {
			color: EntryStatic.colorSet.common.TRANSPARENT,
    outerline: EntryStatic.colorSet.common.TRANSPARENT
}, {
    params: [
        {
            type: 'Text',
            text: '위험한 블록들',
            color: EntryStatic.colorSet.common.TEXT,
            class: 'bold',
            align: 'right',
        }
    ],
    def: [],
    map: {},
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
Entry.staticBlocks.push({
    category: 'MintBlocks', blocks: [
        'text-javascript-functions',

        'console_log',
        'alert',
        'clear_console',
        'url_decode_or_encode',
        'open_url',
        'get_browser_type',
        'copy_text',
        'refresh_page',

        'text-extend-entry-functions',

        'convert-to-binary',
        'search_to_google',
        'full_screen',
        'get_dummy_blocks',
        'entry_toast',
        'if_scene_is',

        'text-made-of-fun',

        'no',
        'cute_block',
    ]
});
updateCategory('MintBlocks')
$('head').append(`<style> #entryCategoryMintBlocks 
{ background-image: url(https://minirang.github.io/img/logo.svg); 
 background-repeat: no-repeat; 
 border-bottom-right-radius: 6px; 
 border-bottom-left-radius: 6px; 
 margin-bottom: 1px; 
 } .entrySelectedCategory#entryCategoryMintBlocks 
  { background-image: https://minirang.github.io/img/logo.svg; 
background-color: #15d8aeff;
border-color: #21bb8dff;
color: #ffffffff;
}
    } </style>
`)
$('#entryCategoryMintBlocks').append('민트블록')
alert("민트블록 로딩 완료!");
console.log('%c 민트블록 로딩 완료!', 'color: #15d8aeff; font-weight: bold; font-size: 50px; font-family: Arial;');
console.log('%c 제작자: 서울민트초코', 'color: #15d8aeff; font-weight: bold; font-size: 20px; font-family: Arial;');
Entry.aiAssistantEnable=true

// d$.get('https://cdn.jsdelivr.net/gh/minirang/MintBlock/block.js')
