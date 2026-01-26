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
addBlock('ascii', '%1 을/를 아스키 코드로 변환한 값 (한글자만)', {
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
    content.charCodeAt(0);
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
addBlock('pause_video', '영상 일시정지하기 %1', {
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
if (window.ytPlayer && window.ytPlayerReady) {
  window.ytPlayer.pauseVideo();
}
else {
  Entry.toast.alert('경고', '영상 로드 후 사용해주세요.')
  Entry.engine.toggleStop();
}
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('proceed_video', '영상 계속 틀기 %1', {
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
if (window.ytPlayer && window.ytPlayerReady) {
  window.ytPlayer.playVideo();
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
Entry.staticBlocks.push({
    category: 'MintBlocks', blocks: [
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
        'prompt',

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

        'text-project',

        'stop_or_pause',
        'full_screen',
        'set_user_info',
        'add_scene',
        'add_varible',
        'set_var',
        'project_id',
        'entry_clipboard_length',
        'object_count',
        'scene_count',

        'text-array',

        'split_n',
        'split_count',

        'text-video',

        'play_video_on_youtube',
        'destroy_video',
        'pause_video',
        'proceed_video',
        'move_video_second',
        'mute_or_unmute_video',
        'video_opacity',
        'is_mute',

        'text-made_of_fun',

        'cute_block',
        'no',
        'open_maker_mypage',
        'helpers_aqu3180',
        'helpers_경찰악어씨',
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
console.log('%c 민트블록 로딩 완료!', 'color: #15d8aeff; font-weight: bold; font-size: 50px; font-family: Arial;');
console.log('%c 제작자: 서울민트초코', 'color: #15d8aeff; font-weight: bold; font-size: 20px; font-family: Arial;');
