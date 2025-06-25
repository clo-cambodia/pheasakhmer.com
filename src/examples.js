// Note: descriptions here are imported into translations.js

export const examples = [

  //---------------------------------------------------------------------------------------------------
  // ខ្មែរ
  //---------------------------------------------------------------------------------------------------
  {
    text: 'ខ្មែរ',
    id: 'word-khmer',
    description: { en: "the word 'Khmer'", km: "" },
    alternates: [
      {
        id: 1,
        text: "ខ្មែរ",
        description: {
          en: `
          <p>
            This example follows the NiDA keying order. That means that the user is
            typing in exactly the same order as the encoded order.
          </p>
        `,
          km: `
          <p>
            ឧទាហរណ៍មួយនេះត្រូវបានសរសេរទៅតាមស្តង់ដារខ្មែរយូនីកូដ មានន័យថា
            អ្នកប្រើប្រាស់បានសរសេរដូចទៅនឹងរបៀបដែលអក្សរខ្មែរត្រូវបាន encoded។
          </p>
        `,
        },
        keys_nida: [
          { cap: 'ខ', key: 'default-K_X' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ម', key: 'default-K_M' },
          { cap: ['Shift', 'ែ'], key: ['shift', 'shift-K_E'] },
          { cap: 'រ', key: 'default-K_R' }
        ],
        keys_angkor_mobile: [
          { cap: 'ខ', key: 'default-K_X' },
          { cap: 'ម', key: ['flickstart', 'default-K_M'], flick: true },
          { cap: '្ម', key: ['flickpopup', 'popup-default-T_17D2_1798'] },
          { cap: 'េ', key: ['flickstart', 'default-K_E'], flick: true },
          { cap: 'ែ', key: ['flickpopup', 'popup-default-K_E+shift', 'default-K_E'] },
          { cap: 'រ', key: 'default-K_R' },
          // { cap: '។',key: ['longpress', 'default-K_PERIOD'], longpress: true },
          // { cap: '៕', key: ['popup', 'popup-default-K_PERIOD+shift'] },
        ],
        keys_nida_tablet: [
          { cap: 'ខ', key: 'default-K_X' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ម', key: 'default-K_M' },
          { cap: ['Shift', 'ែ'], key: ['shift', 'shift-K_E'] },
          { cap: 'រ', key: 'default-K_R' },
        ],
        keys_angkor_tablet: [
          { cap: 'ខ', key: 'default-K_X' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ម', key: 'default-K_M' },
          { cap: ['Shift', 'ែ'], key: ['shift', 'shift-K_E'] },
          { cap: 'រ', key: 'default-K_R' },
        ],
      },
      {
        id: 2,
        text: "ខែ្មរ",
        description: { en: `
          <p>
            In this example, the COENG MO subconsonant ្ម has been typed after the vowel ែ.
            With the NiDA keyboard and the existing Khmer Unicode encoding, this appears
            identical to the alternate (correct) order, so it is not possible to tell by
            reading that it is wrong.
          </p>

          <p>
            This is an example of <b>Case #1</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will both fix this incorrect ordering automatically.
          </p>

          <p>
            <b>Important note:</b> The Busra font cannot show a dotted circle for
            Case #1 issues, because the text rendering engine internally reorders the vowel
            before it reaches the font. Making this issue visible to the user requires a change
            to the renderer. This is the only scenario where this problem arises.
          </p>
        `,
          km: `
          <p>
            នៅក្នុងឧទាហរណ៍មួយនេះ  ្ម ត្រូវបានសរសេរបន្ទាប់ពី ​ែ។
            តាមរយៈការអាន របៀបសរសេរនេះមើលទៅហាក់បីដូចជាត្រឹមត្រូវ ព្រោះក្តារចុច NiDA និង ស្តង់ដារខ្មែរយូនីកូដ
            មិនអាចបង្ហាញអោយយើងដឹងថាវាខុសនោះទេ។
          </p>

          <p>
            នេះគឺជាឧទាហណ៍នៃ <b>ករណីទី ០១ </b> នៅក្នុង <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">ឯកសារស្រាវជ្រាវ</a>។
          </p>

          <p>
            ក្តារចុចខ្មែរអង្គរ និង normalizer អាចកែតម្រូវរបៀបសរសេរមិនត្រឹមត្រូវនេះបានភ្លាមៗ។
          </p>

          <p>
            <b>ចំណាំ៖</b> ពុម្ពអក្សរ Busra មិនអាចបង្ហាញរង្វង់មូលចុចៗបានទេនៅកន្លែងកំហុសសម្រាប់ករណីទី ០១ នេះ
            ព្រោះការ render បានតម្រៀបស្រៈរួចទៅហើយ។ ដើម្បីអាចអោយអ្នកប្រើប្រាស់មើលឃើញពីបញ្ហារង្វង់មូលចុចៗនេះបាន
            យើងត្រូវធ្វើការផ្លាស់ប្តូរការ render។ នេះគឺជាករណីតែមួយគត់ដែលមានបញ្ហានេះកើតឡើង។
          </p>
        `,
        },
        keys_nida: [
          { cap: 'ខ', key: 'default-K_X' },
          { cap: ['Shift', 'ែ'], key: ['shift', 'shift-K_E'] },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ម', key: 'default-K_M' },
          { cap: 'រ', key: 'default-K_R' }
        ],
        keys_angkor_mobile: [
          { cap: 'ខ', key: 'default-K_X' },
          { cap: 'េ', key: ['flickstart', 'default-K_E'], flick: true },
          { cap: 'ែ', key: ['flickpopup', 'popup-default-K_E+shift', 'default-K_E'] },
          { cap: 'ម', key: ['flickstart', 'default-K_M'], flick: true },
          { cap: '្ម', key: ['flickpopup', 'popup-default-T_17D2_1798'] },
          { cap: 'រ', key: 'default-K_R' }
        ],
        keys_nida_tablet: [
          { cap: 'ខ', key: 'default-K_X' },
          { cap: ['Shift', 'ែ'], key: ['shift', 'shift-K_E'] },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ម', key: 'default-K_M' },
          { cap: 'រ', key: 'default-K_R' }
        ],
        keys_angkor_tablet: [
          { cap: 'ខ', key: 'default-K_X' },
          { cap: ['Shift', 'ែ'], key: ['shift', 'shift-K_E'] },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ម', key: 'default-K_M' },
          { cap: 'រ', key: 'default-K_R' }
        ],
      },
    ]
  },

  //---------------------------------------------------------------------------------------------------
  // ស្ត្រី
  //---------------------------------------------------------------------------------------------------
  {
    text: 'ស្ត្រី',
    id: "woman",
    description: { en: "stri, 'woman'", km: "" },
    alternates: [
      {
        id: 1,
        text: "ស្ត្រី",
        description: { en: `
          <p>
            This example follows the NiDA keying order. That means that the user is
            typing in exactly the same order as the encoded order.
          </p>
        `, km: `
          <p>
            ឧទាហរណ៍មួយនេះត្រូវបានសរសេរទៅតាមស្តង់ដារខ្មែរយូនីកូដ មានន័យថា
            អ្នកប្រើប្រាស់បានសរសេរដូចទៅនឹងរបៀបដែលអក្សរខ្មែរត្រូវបាន encoded។
          </p>
        `,
        },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ត', key: 'default-K_T' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ត', key: ['flickstart', 'default-K_T'], flick: true },
          { cap: '្ត', key: ['flickpopup', 'popup-default-T_17D2_178F'] },
          { cap: 'រ', key: ['flickstart', 'default-K_R'], flick: true },
          { cap: '្រ', key: ['flickpopup', 'popup-default-T_17D2_179A'] },
          { cap: 'ិ', key: ['flickstart', 'default-K_I'], flick: true },
          { cap: 'ី', key: ['flickpopup', 'popup-default-K_I+shift'] },
        ],
        keys_nida_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ត', key: 'default-K_T' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
        keys_angkor_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ត', key: 'default-K_T' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
      },
      {
        id: 2,
        text: "ស្រ្តី",
        description: { en: `
          <p>
            In this example, the COENG RO ្រ is being typed before COENG TA ្ត. This
            does not match the expected phonetic ordering of the subconsonants. On
            many devices, this renders identically to the correct phonetic encoding
            order.
          </p>

          <p>
            This is an example of <b>Case #2</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will both fix this incorrect ordering automatically.
          </p>
        `, km: `
          <p>
            នៅក្នុងឧទាហរណ៍នេះ  ្រ ត្រូវបានសរសេរមុន  ្ត។ នេះមិនត្រឹមត្រូវទៅតាមរបៀបសរសេររបស់ជើងព្យញ្ជនៈនោះទេ។
            ប៉ុន្តែនៅលើឧបករណ៍ជាច្រើន ការសរសេរមួយនេះបែរជាត្រូវបានបង្ហាញត្រឹមត្រូវទៅវិញ។
          </p>

          <p>
            នេះគឺជាឧទាហណ៍នៃ <b>ករណីទី ០២ </b> នៅក្នុង <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">ឯកសារស្រាវជ្រាវ</a>។
          </p>

          <p>
            ក្តារចុចខ្មែរអង្គរ និង normalizer អាចកែតម្រូវរបៀបសរសេរមិនត្រឹមត្រូវនេះបានភ្លាមៗ។
          </p>

        `,
        },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ត', key: 'default-K_T' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'រ', key: ['flickstart', 'default-K_R'], flick: true },
          { cap: '្រ', key: ['flickpopup', 'popup-default-T_17D2_179A'] },
          { cap: 'ត', key: ['flickstart', 'default-K_T'], flick: true },
          { cap: '្ត', key: ['flickpopup', 'popup-default-T_17D2_178F'] },
          { cap: 'ិ', key: ['flickstart', 'default-K_I'], flick: true },
          { cap: 'ី', key: ['flickpopup', 'popup-default-K_I+shift'] },
        ],
        keys_angkor_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ត', key: 'default-K_T' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I']},
        ],
        keys_nida_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ត', key: 'default-K_T' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I']},
        ],
      },
      {
        id: 3,
        text: "ស្ដ្រី",
        description: { en: `
          <p>
            This is one of the most contentious issues: COENG DA ្ដ is being used
            instead of COENG TA ្ត. In modern Khmer, COENG DA ្ដ and
            COENG TA ្ត have an identical presentation. This makes them confusable.
          </p>

          <p>
            In old and middle Khmer, COENG DA can have a differentiated form; see the
            <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf" target="_blank">proposal document</a>,
            <i>Coeng ta and Coeng da</i> section, for more detail.
          </p>

          <p>
            This is an example of <b>Case #8</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer change COENG DA ្ដ to COENG TA ្ត automatically.
          </p>
        `, km: `
          <p>
            ជើង ដ ត្រូវបានភាគច្រើនប្រើជំនួសជើង ត ដោយសារតែរូបរាងដូចគ្នា ធ្វើអោយមានភាពច្របូកច្របល់ហើយក្លាយជាបញ្ហាដ៏ធំមួយ។
          </p>

          <p>
            នៅសម័យខ្មែរបុរាណ និងខ្មែរកណ្តាល ជើង ដ មានរូបរាងខុសពីបច្ចុប្បន្ន។ ​សម្រាប់ព័តមានបន្ថែម អាចចូលទៅកាន់
            <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf" target="_blank"> អត្ថបទស្រាវជ្រាវ</a>
             នៅផ្នែក<i>ជើង ត និង ជើង ដ</i>។
          </p>

          <p>
            នេះគឺជាឧទាហណ៍នៃ <b>ករណីទី ០៨ </b> នៅក្នុង <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">ឯកសារស្រាវជ្រាវ</a>។
          </p>

          <p>
            ក្តារចុចខ្មែរអង្គរ និង normalizer អាចកែតម្រូវជើង ដ អោយទៅជាជើង ​ត បានភ្លាមៗ។
          </p>
        `,
        },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ដ', key: 'default-K_D' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ដ', key: ['flickstart', 'default-K_D'], flick: true },
          { cap: '្ដ', key: ['flickpopup', 'popup-default-T_17D2_178A'] },
          { cap: 'រ', key: ['flickstart', 'default-K_R'], flick: true },
          { cap: '្រ', key: ['flickpopup', 'popup-default-T_17D2_179A'] },
          { cap: 'ិ', key: ['flickstart', 'default-K_I'], flick: true },
          { cap: 'ី', key: ['flickpopup', 'popup-default-K_I+shift'] },
        ],
        keys_nida_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ដ', key: 'default-K_D' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
        keys_angkor_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ដ', key: 'default-K_D' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
      },
      {
        id: 4,
        text: "ស្រ្ដី",
        description: { en: `
          <p>
            In this example, there are two problems:
          </p>

          <ol>
            <li>
              This is one of the most contentious issues: COENG DA ្ដ is being used
              instead of COENG TA ្ត. In modern Khmer, COENG DA ្ដ and
              COENG TA ្ត have an identical presentation. This makes them confusable.
            </li>
            <li>
              The COENG RO ្រ is being typed before COENG DA ្ដ. This
              does not match the expected phonetic ordering of the subconsonants. On
              many devices, this renders identically to the correct phonetic encoding
              order.
            </li>
          </ol>

          <p>
            In old and middle Khmer, COENG DA can have a differentiated form; see the
            <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf" target="_blank">proposal document</a>,
            <i>Coeng ta and Coeng da</i> section, for more detail.
          </p>

          <p>
            This is an example of <b>Case #2</b> and <b>Case #8</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will both fix these two problems automatically.
          </p>
        `, km: `
          <p>
              ក្នុងឧទាហរណ៍នេះ មានបញ្ហា ២គឺ៖
            </p>

            <ol>
              <li>
                ជើង ដ ត្រូវបានភាគច្រើនប្រើជំនួសជើង ត ដោយសារតែរូបរាងដូចគ្នា ធ្វើអោយមានភាពច្របូកច្របល់ហើយក្លាយជាបញ្ហាដ៏ធំមួយ។
              </li>
              <li>
                 ្រ ត្រូវបានសរសេរមុនជើង ដ។ នេះមិនត្រឹមត្រូវទៅតាមរបៀបសរសេររបស់ជើងព្យញ្ជនៈនោះទេ។
                ប៉ុន្តែនៅលើឧបករណ៍ជាច្រើន ការសរសេរមួយនេះបែរជាត្រូវបានបង្ហាញត្រឹមត្រូវទៅវិញ។
              </li>
            </ol>

            <p>
              នៅសម័យខ្មែរបុរាណ និងខ្មែរកណ្តាល ជើង ដ មានរូបរាងខុសពីបច្ចុប្បន្ន។ ​សម្រាប់ព័តមានបន្ថែម អាចចូលទៅកាន់
              <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf" target="_blank"> អត្ថបទស្រាវជ្រាវ</a>
              នៅផ្នែក<i>ជើង ត និង ជើង ដ</i>។
            </p>

            <p>
              នេះគឺជាឧទាហណ៍នៃ <b>ករណីទី ០២</b>  និង <b>ករណីទី ០៨</b> នៅក្នុង <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">ឯកសារស្រាវជ្រាវ</a>។
            </p>

            <p>
              ក្តារចុចខ្មែរអង្គរ និង normalizer អាចកែតម្រូវបញ្ហាទាំង២នេះបានភ្លាមៗ។
            </p>
        `, },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ដ', key: 'default-K_D' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'រ', key: ['flickstart', 'default-K_R'], flick: true },
          { cap: '្រ', key: ['flickpopup', 'popup-default-T_17D2_179A'] },
          { cap: 'ដ', key: ['flickstart', 'default-K_D'], flick: true },
          { cap: '្ដ', key: ['flickpopup', 'popup-default-T_17D2_178A'] },
          { cap: 'ិ', key: ['flickstart', 'default-K_I'], flick: true },
          { cap: 'ី', key: ['flickpopup', 'popup-default-K_I+shift'] },
        ],
        keys_nida_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ដ', key: 'default-K_D' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
        keys_angkor_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ដ', key: 'default-K_D' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
      },
      {
        id: 5,
        text: "សី្រ្ត",
        description: { en: `
          <p>
            This example illustrates two problems:
          </p>

          <ul>
            <li>
              COENG TA ្ត and COENG RO ្រ have been typed after the vowel ី. This
              is not linguistically consistent with the expected order.
            </li>
            <li>
              COENG RO ្រ is being typed before COENG TA ្ត. This
              does not match the expected phonetic ordering of the subconsonants.
            </li>
          </ul>

          <p>
            On many devices, this appears identical to the alternate (correct) order,
            so it is not possible to tell by reading that it is wrong.
          </p>

          <p>
            This is an example of <b>Case #1</b> and <b>Case #2</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will both fix this incorrect ordering automatically.
          </p>
        `, km: `
          <p>
            ឧទារហណ៍នេះបង្ហាញពីបញ្ហា ២ផ្សេងគ្នា៖
          </p>

          <ul>
            <li>
              ជើង ត និង ជើង រ ត្រូវបានសរសេរបន្ទាប់ពីស្រៈ  ី ។ នេះមិនសមស្របទៅតាមលំដាប់អក្សរនៅក្នុងភាសាវិទ្យានោះទេ។
            </li>
            <li>
               ្រ ត្រូវបានសរសេរមុន  ្ត។ នេះមិនត្រឹមត្រូវទៅតាមរបៀបសរសេររបស់ជើងព្យញ្ជនៈនោះទេ។
            </li>
          </ul>

          <p>
            ឧបករណ៍ជាច្រើន​បង្ហាញរបៀបសរសេរខុសមួយនេះដូចនឹងពាក្យត្រូវ ធ្វើអោយយើងមិនអាចកត់សម្គាល់កំហុសបាន។
          </p>

          <p>
           នេះគឺជាឧទាហណ៍នៃ <b>ករណីទី ០១</b>  និង <b>ករណីទី ០២</b> នៅក្នុង <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">ឯកសារស្រាវជ្រាវ</a>។
          </p>

          <p>
            ក្តារចុចខ្មែរអង្គរ និង normalizer អាចកែតម្រូវរបៀបសរសេរខុសនេះបានភ្លាមៗ។
          </p>
        `,
        },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ត', key: 'default-K_T' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ិ', key: ['flickstart', 'default-K_I'], flick: true },
          { cap: 'ី', key: ['flickpopup', 'popup-default-K_I+shift'] },
          { cap: 'រ', key: ['flickstart', 'default-K_R'], flick: true },
          { cap: '្រ', key: ['flickpopup', 'popup-default-T_17D2_179A'] },
          { cap: 'ត', key: ['flickstart', 'default-K_T'], flick: true },
          { cap: '្ត', key: ['flickpopup', 'popup-default-T_17D2_178F'] },
        ],
        keys_nida_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ត', key: 'default-K_T' },
        ],
        keys_angkor_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ត', key: 'default-K_T' },
        ],
      },
      {
        id: 6,
        text: "សី្រ្ដ",
        description: { en: `
          <p>
            This example illustrates <i>three</i> problems!
          </p>

          <ul>
            <li>
              This is one of the most contentious issues: COENG DA ្ដ is being used
              instead of COENG TA ្ត. In modern Khmer, COENG DA ្ដ and
              COENG TA ្ត have an identical presentation. This makes them confusable.
            </li>
            <li>
              COENG DA ្ដ and COENG RO ្រ have been typed after the vowel ី. This
              is not linguistically consistent with the expected order.
            </li>
            <li>
              COENG RO ្រ is being typed before COENG DA ្ដ. This
              does not match the expected phonetic ordering of the subconsonants.
            </li>
          </ul>

          <p>
            On many devices, this appears identical to the alternate (correct) order,
            so it is not possible to tell by reading that it is wrong.
          </p>

          <p>
            In old and middle Khmer, COENG DA can have a differentiated form; see the
            <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf" target="_blank">proposal document</a>,
            <i>Coeng ta and Coeng da</i> section, for more detail.
          </p>

          <p>
            This is an example of <b>Case #1</b>, <b>Case #2</b>, and <b>Case #8</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will both fix the ordering, and replace
            COENG DA ្ដ with COENG TA ្ត automatically.
          </p>
        `, km: `
          <p>
            ក្នុងឧទាហរណ៍នេះបង្ហាញពីបញ្ហា <i>ចំនួនបី</i> !
          </p>

          <ul>
            <li>
              ជើង ដ ត្រូវបានភាគច្រើនប្រើជំនួសជើង ត ដោយសារតែរូបរាងដូចគ្នា ធ្វើអោយមានភាពច្របូកច្របល់ហើយក្លាយជាបញ្ហាដ៏ធំមួយ។
            </li>
            <li>
              ជើង ដ និង ជើង  ្រ ត្រូវបានសរសេរបន្ទាប់ពីស្រៈ  ី ។ នេះមិនសមស្របទៅតាមលំដាប់អក្សរនៅក្នុងភាសាវិទ្យានោះទេ។
            </li>
            <li>
              ្រ ត្រូវបានសរសេរមុនជើង ដ។ នេះមិនត្រឹមត្រូវទៅតាមរបៀបសរសេររបស់ជើងព្យញ្ជនៈនោះទេ។
            </li>
          </ul>

          <p>
           ឧបករណ៍ជាច្រើន​បង្ហាញរបៀបសរសេរខុសនេះដូចនឹងពាក្យត្រូវ ធ្វើអោយយើងមិនអាចកត់សម្គាល់កំហុសបាន។
          </p>

          <p>
            នៅសម័យខ្មែរបុរាណ និងខ្មែរកណ្តាល ជើង ដ មានរូបរាងខុសពីបច្ចុប្បន្ន។ ​សម្រាប់ព័តមានបន្ថែម អាចចូលទៅកាន់
            <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf" target="_blank"> អត្ថបទស្រាវជ្រាវ</a>
            នៅផ្នែក<i>ជើង ត និង ជើង ដ</i>។
          </p>

          <p>
            នេះគឺជាឧទាហណ៍នៃ <b>ករណីទី ០១</b>  <b>ករណីទី ០២</b> និង <b>ករណីទី ០៨</b> នៅក្នុង <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">ឯកសារស្រាវជ្រាវ</a>។
          </p>

          <p>
            ក្តារចុចខ្មែរអង្គរ និង normalizer អាចកែតម្រូវរបៀបសរសេរមិនត្រឹមត្រូវ និង កែតម្រូវជើង ដ អោយទៅជាជើង ​ត បានភ្លាមៗ។
          </p>
        `, },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ដ', key: 'default-K_D' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ិ', key: ['flickstart', 'default-K_I'], flick: true },
          { cap: 'ី', key: ['flickpopup', 'popup-default-K_I+shift'] },
          { cap: 'រ', key: ['flickstart', 'default-K_R'], flick: true },
          { cap: '្រ', key: ['flickpopup', 'popup-default-T_17D2_179A'] },
          { cap: 'ដ', key: ['flickstart', 'default-K_D'], flick: true },
          { cap: '្ដ', key: ['flickpopup', 'popup-default-T_17D2_178A'] },
        ],
        keys_nida_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ដ', key: 'default-K_D' },
        ],
        keys_angkor_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ដ', key: 'default-K_D' },
        ],
      },
    ]
  },

  //---------------------------------------------------------------------------------------------------
  // ស៊ើប
  //---------------------------------------------------------------------------------------------------
  {
    text: 'ស៊ើប',
    id: 'detect',
    description: { en: "'to detect, investigate'", km: "" },
    alternates: [
      {
        id: 1,
        text: "ស៊ើប",
        description: { en: `
          <p>
            This example follows the NiDA keying order. That means that the user is
            typing in exactly the same order as the encoded order.
          </p>
        `, km: `
          <p>
            ឧទាហរណ៍មួយនេះត្រូវបានសរសេរទៅតាមស្តង់ដារខ្មែរយូនីកូដ មានន័យថា
            អ្នកប្រើប្រាស់បានសរសេរដូចទៅនឹងរបៀបដែលអក្សរខ្មែរត្រូវបាន encoded។
          </p>
        `, },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '៊', key: 'default-K_SLASH' },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', '៊ ៊'], key: ['default', 'default-K_SLASH'] },
          //error, doesn't load the slash 
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_nida_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '៊', key: 'default-K_SLASH' },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '៊', key: 'default-K_SLASH' },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
      },
      {
        id: 2,
        text: "ស៉ើប",
        description: { en: `
          <p>
            This example uses the wrong consonant shifter, ៉ MUSIKATOAN
            instead of ៊ TRISAP on ស. While this is not technically an
            invalid encoding, it is not linguistically plausible, because
            the consonant ស is already in the first series, and so the new
            Khmer Encoding Structure enforces use of ៊ TRISAP in this
            position.
          </p>

          <p>
            On many devices, ៉ MUSIKATOAN may render in its down-shifted
            form, even when used with ស, which makes this confusable.
          </p>

          <p>
            This is an example of <b>Case #4</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will correct the shifter automatically
            when it is used in the down-shifted form.
          </p>
        `, km: `
          <p>
            ឧទាហរណ៍នេះបានប្រើតួអក្សរប្តូរព្យព្ជានៈមិនត្រឹមត្រូវ ដោយប្រើមូសិកទន្តជំនួសអោយត្រីសព្ទនៅលើអក្សរ​ ស ទៅវិញ។
            នេះមិនមែនជាកំហុសនៃ encoding នោះទេ តែជាការប្រើខុសទៅនឹងក្បួននៃការសរសេរភាសាខ្មែរព្រោះ អក្សរ​ ស ជាអឃោសៈ
            មិនអាចប្រើជាមួយមូសិកទន្តបានជាដាច់ខាត។  ហេតុនេះហើយបានជា
            Khmer Encoding Structure នឹងអនុវត្តការប្រើប្រាស់តែត្រីសព្ទប៉ុណ្ណោះក្នុងលក្ខខណ្ឌមួយនេះ។
          </p>

          <p>
            នៅលើឧបករណ៍ជាច្រើន មូសិកទន្តត្រូវបានប្តូរទៅជាស្រៈ  ុ ពេលប្រើជាមួយអក្សរ ស ដែលធ្វើឱ្យមានការយល់ច្រឡំ។
          </p>

          <p>
           នេះគឺជាឧទាហណ៍នៃ <b>ករណីទី ០៤</b> នៅក្នុង <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">ឯកសារស្រាវជ្រាវ</a>។
          </p>

          <p>
            ក្តារចុចខ្មែរអង្គរ និង normalizer អាចធ្វើការកែតម្រូវតួអក្សរប្តូរព្យព្ជានៈអោយបានត្រឹមត្រូវភ្លាមៗ។
          </p>
        `, },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '៉', key: 'default-K_QUOTE+shift' },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_nida_desktop: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', '៉'], key: ['shift', 'shift-K_QUOTE'] },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_desktop: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', '៉'], key: ['shift', 'shift-K_QUOTE'] },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '់', key: ['flickstart', 'default-K_QUOTE'], flick: true },
          { cap: '៉', key: ['flickpopup', 'popup-default-K_QUOTE+shift'] },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_nida_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '៉', key: 'default-K_QUOTE+shift' },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', '៉'], key: ['shift', 'shift-K_QUOTE'] },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
      },

      {
        id: 3,
        text: "ស៊េីប",
        description: { en: `
          <p>
            In this example, the vowels េ and ី have been typed separately, which on
            many devices renders identically to the correct single vowel character ើ.
            The Khmer Unicode encoding expects only a single vowel character per syllable.
          </p>

          <p>
            This is an example of <b>Case #7</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will merge the two vowels េ and ី into ើ automatically.
          </p>
        `, km: `
          <p>
            ក្នុងឧទាហរណ៍នេះ ស្រៈ  េ និង  ី ត្រូវបានសរសេរផ្សេងពីគ្នា តែនៅលើឧបករណ៍ជាច្រើនបែរជាបង្ហាញចេញជាស្រៈ  ើ។
            ខ្មែរយូនីកូដត្រូវការស្រៈតែមួយប៉ុណ្ណោះក្នុងមួយព្យាង្គ។
          </p>

          <p>
            នេះគឺជាឧទាហណ៍នៃ <b>ករណីទី ០៧</b> នៅក្នុង <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">ឯកសារស្រាវជ្រាវ</a>។
          </p>

          <p>
            ក្តារចុចខ្មែរអង្គរ និង normalizer នឹងផ្សំបញ្ចូលស្រៈ  េ និង  ី អោយទៅជាស្រៈ  ើ ដោយស្វ័យប្រវត្តិ។
          </p>
        `, },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '៊', key: 'default-K_SLASH' },
          { cap: 'េ', key: 'default-K_E' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '់', key: ['longpress', 'default-K_QUOTE'], longpress: true },
          { cap: '៊  ៊', key: ['popup', 'popup-default-K_SLASH'] },
          { cap: 'េ', key: 'default-K_E' },
          { cap: 'ិ', key: ['flickstart', 'default-K_I'], flick: true },
          { cap: 'ី', key: ['flickpopup', 'popup-default-K_I+shift'] },
          { cap: 'ប', key: 'default-K_B' },
          //also error because of K_SLASH
        ],
        keys_nida_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '៊', key: 'default-K_SLASH' },
          { cap: 'េ', key: 'default-K_E' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '៊', key: 'default-K_SLASH' },
          { cap: 'េ', key: 'default-K_E' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: 'ប', key: 'default-K_B' },
        ],
      },

      {
        id: 4,
        text: "សុើប",
        description: { en: `
          <p>
            This is one of the most common typing issues: using
            the U vowel ុ instead of the appropriate TRISAP ៊ consonant
            shifter, because the consonant shifter looks like the vowel
            when it is rendered underneath the base consonant.
          </p>

          <p>
            This is an example of <b>Case #4</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will convert the U vowel ុ to
            appropriate shifter (TRISAP ៊ or MUSIKATOAN ៉) automatically.
          </p>
        `, km: `
          <p>
            ការប្រើប្រាស់ស្រៈ  ុ ជំនួសអោយត្រីសព្ទ ក្លាយជាបញ្ហាទូទៅបំផុតហើយមានការភាន់ច្រឡំច្រើន ដោយសារតែតួអក្សរប្តូរព្យព្ជានៈមួយនេះ
            ប្រែជាស្រៈពេលស្ថិតនៅខាងក្រោមព្យញ្ជនៈ។
          </p>

          <p>
            នេះគឺជាឧទាហណ៍នៃ <b>ករណីទី ០៤</b> នៅក្នុង <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">ឯកសារស្រាវជ្រាវ</a>។
          </p>

          <p>
            ក្តារចុចខ្មែរអង្គរ និង normalizer នឹងបម្លែងស្រៈ  ុ អោយទៅជាតួអក្សរប្តូរព្យព្ជានៈ
            ដែលត្រឹមត្រូវ(ត្រីសព្ទ ឬ មូសិកទន្ត)ដោយស្វ័យប្រវត្តិ។
          </p>
        `, },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_nida_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
      },

      {
        id: 5,
        text: "សេីុប",
        description: { en: `
          <p>
            This example illustrates two problems:
          </p>

          <ul>
            <li>
              This is one of the most common typing issues: using
              the U vowel ុ instead of the appropriate TRISAP ៊ consonant
              shifter, because the consonant shifter looks like the vowel
              when it is rendered underneath the base consonant.
            </li>
            <li>
              The vowels េ and ី have been typed separately, which on
              many devices renders identically to the correct single vowel character ើ.
              The Khmer Unicode encoding expects only a single vowel character per syllable.
            </li>
          </ul>

          <p>
            This is an example of <b>Case #4</b> and <b>Case #7</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will merge the two vowels AE េ and II ី into ើ,
            and convert the U vowel ុ to appropriate shifter (TRISAP ៊ or MUSIKATOAN ៉)
            automatically.
          </p>
        `, km: `
          <p>
            ឧទាហរណ៍នេះបង្ហាញពីបញ្ហាចំនួនពីរ៖
          </p>

          <ul>
            <li>
              ការប្រើប្រាស់ស្រៈ  ុ ជំនួសអោយត្រីសព្ទ ក្លាយជាបញ្ហាទូទៅបំផុតហើយមានការភាន់ច្រឡំច្រើន ដោយសារតែតួអក្សរប្តូរព្យព្ជានៈមួយនេះ
              ប្រែជាស្រៈពេលស្ថិតនៅខាងក្រោមព្យញ្ជនៈ។
            </li>
            <li>
              ក្នុងឧទាហរណ៍នេះ ស្រៈ  េ និង  ី ត្រូវបានសរសេរផ្សេងពីគ្នា តែនៅលើឧបករណ៍ជាច្រើនបែរជាបង្ហាញចេញជាស្រៈ  ើ។
              ខ្មែរយូនីកូដត្រូវការស្រៈតែមួយប៉ុណ្ណោះក្នុងមួយព្យាង្គ។
            </li>
          </ul>

          <p>
            នេះគឺជាឧទាហណ៍នៃ <b>ករណីទី ០៤</b> និង <b>ករណីទី ០៧</b> នៅក្នុង <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">ឯកសារស្រាវជ្រាវ</a>។
          </p>

          <p>
            ក្តារចុចខ្មែរអង្គរ និង normalizer នឹងផ្សំបញ្ចូលស្រៈ  េ និង  ី អោយទៅជាស្រៈ  ើ ហើយ
            បម្លែងស្រៈ  ុ អោយទៅជាតួអក្សរប្តូរព្យព្ជានៈដែលត្រឹមត្រូវ(ត្រីសព្ទ ឬ មូសិកទន្ត) ដោយស្វ័យប្រវត្តិ។
          </p>
        `, },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'េ', key: 'default-K_E' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'េ', key: 'default-K_E' },
          { cap: 'ិ', key: ['flickstart', 'default-K_I'], flick: true },
          { cap: 'ី', key: ['flickpopup', 'popup-default-K_I+shift'] },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_nida_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'េ', key: 'default-K_E' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_tablet: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'េ', key: 'default-K_E' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: 'ប', key: 'default-K_B' },
        ],
      },
    ]
  },

  //---------------------------------------------------------------------------------------------------
  // ញ៉ាំ
  //---------------------------------------------------------------------------------------------------
  {
    text: 'ញ៉ាំ',
    id: 'nham',
    description: { en: "'to eat'", km: "" },
    alternates: [
      {
        id: 1,
        text: "",
        description: {
          en: `
          <p>
            This example follows the NiDA keying order. That means that the user is
            typing in exactly the same order as the encoded order.
          </p>

          <p>
            <b>Note:</b> a bug on iOS and macOS means that the correctly encoded order is
            rendered incorrectly, with ៉ MUSIKATOAN shown above ញ, instead of underneath.
            This of course leads to great confusion! This bug has been reported to Apple for
            resolution (FB5761346).
            <a href="https://marc.durdin.net/2017/03/when-nyam-meets-nyam/" target="_blank">More discussion (2017)</a>.
          </p>
        `,
          km: `
          <p>
            ឧទាហរណ៍មួយនេះត្រូវបានសរសេរទៅតាមស្តង់ដារខ្មែរយូនីកូដ មានន័យថា
            អ្នកប្រើប្រាស់បានសរសេរដូចទៅនឹងរបៀបដែលអក្សរខ្មែរត្រូវបាន encoded។
          </p>
          <p>
            <b>ចំណាំ៖</b> មានកំហុសមួយនៅក្នុងកម្មវិធី iOS និង macOS ដោយ​បានបង្ហាញមូសិកទន្តនៅលើជំនួសអោយខាងក្រោមព្យព្ជានៈ ញ ទៅវិញ។
            កំហុសនេះធ្វើអោយមានការភាន់ច្រឡំជាខ្លាំង ហើយត្រូវបានគេរាយការណ៍ទៅកាន់ Apple ដើម្បីរកដំណោះស្រាយ (FB5761346) ។
            <a href="https://marc.durdin.net/2017/03/when-nyam-meets-nyam/" target="_blank">ព័ត៌មានលម្អិតបន្ថែម (2017)</a>។
          </p>
        `,
        },
        keys_nida: [
          { cap: ['Shift','ញ'], key: ['shift', 'shift-K_J'] },
          { cap: '៉', key: 'default-K_QUOTE+shift' },
          { cap: ['Shift','ាំ'], key: ['shift', 'shift-K_A'] },
        ],
        keys_nida_desktop: [
          { cap: ['Shift','ញ'], key: ['shift', 'shift-K_J'] },
          { cap: ['Shift','៉'], key: ['shift', 'shift-K_QUOTE'] },
          { cap: ['Shift','ាំ'], key: ['shift', 'shift-K_A'] },
        ],
        keys_angkor_desktop: [
          { cap: ['Shift','ញ'], key: ['shift', 'shift-K_J'] },
          { cap: ['Shift','៉'], key: ['shift', 'shift-K_QUOTE'] },
          { cap: ['Shift','ាំ'], key: ['shift', 'shift-K_A'] },
        ],
        keys_angkor_mobile: [
          { cap: 'ញ', key: 'default-K_J+shift' },
          { cap: '់', key: ['flickstart', 'default-K_QUOTE'], flick: true },
          { cap: '៉', key: ['flickpopup', 'popup-default-K_QUOTE+shift'] },
          { cap: 'ា', key: ['flickstart', 'default-K_A'], flick: true },
          { cap: 'ាំ', key: ['flickpopup', 'popup-default-K_A+shift'] },
        ],
        keys_nida_tablet: [
          { cap: ['Shift','ញ'], key: ['shift', 'shift-K_J'] },
          { cap: '៉', key: 'default-K_QUOTE+shift' },
          { cap: ['Shift','ាំ'], key: ['shift', 'shift-K_A'] },
        ],
        keys_angkor_tablet: [
          { cap: ['Shift','ញ'], key: ['shift', 'shift-K_J'] },
          { cap: ['Shift','៉'], key: ['shift', 'shift-K_QUOTE'] },
          { cap: ['Shift','ាំ'], key: ['shift', 'shift-K_A'] },
        ],
      },

      {
        id: 2,
        text: "ញុំា",
        description: {
          en: `
          <p>
            This example shows two common problems, both deriving from
            typing the text as it is visually presented:
          </p>

          <ul>
            <li>
              This is one of the most common typing issues: using
              the U vowel ុ instead of the appropriate MUSIKATOAN ៉ consonant
              shifter, because the consonant shifter looks like the vowel
              when it is rendered underneath the base consonant.
            </li>
            <li>
              The NIKAHIT sign ំ has been typed separately and before the AA
              vowel ា.
            </li>
          </ul>

          <p>
            On most devices, this example renders almost identically to the expected
            (correct) example. The NIKAHIT mark ំ is usually rendered slightly
            left of the AA ា vowel, but this is very subtle and easily missed.
          </p>

          <p>
            The first three letters of this example are actually a valid sequence for
            typing ញុំ​ (which is not a Khmer word, but follows the same rules as e.g. កុំ 'do not').
            This close similarity is another reason why it is so easily confused.
          </p>

          <p>
            <b>Note:</b> a bug on iOS and macOS means that the correctly encoded order is
            rendered incorrectly, with ៉ MUSIKATOAN shown above ញ, instead of underneath.
            This of course leads to great confusion! This bug has been reported to Apple for
            resolution (FB5761346).
            <a href="https://marc.durdin.net/2017/03/when-nyam-meets-nyam/" target="_blank">More discussion (2017)</a>.
          </p>

          <p>
            This is an example of <b>Case #4</b> and <b>Case #5</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will reorder ា and ំ,
            and convert the U vowel ុ to appropriate shifter (MUSIKATOAN ៉)
            automatically.
          </p>
        `,
          km: `
          <p>
            ឧទាហរណ៍នេះបង្ហាញពីបញ្ហាទូទៅពីរ ដែលកើតឡើងពីការសរសេរអក្សរតាមពាក្យដែលមើលឃើញ៖
          </p>

          <ul>
            <li>
              ការប្រើប្រាស់ស្រៈ  ុ ជំនួសអោយមូសិកទន្ត ក្លាយជាបញ្ហាទូទៅបំផុតហើយមានការភាន់ច្រឡំច្រើន ដោយសារតែតួអក្សរប្តូរព្យព្ជានៈមួយនេះ
              ប្រែជាស្រៈពេលស្ថិតនៅខាងក្រោមព្យញ្ជនៈ។
            </li>
            <li>
              សញ្ញានិគ្គហីតត្រូវបានសរសេរដាច់ដោយឡែក និង មុនស្រៈ  ា ។
            </li>
          </ul>

          <p>
            នៅលើឧបករណ៍ភាគច្រើន ឧទាហរណ៍នេះមើលទៅដូចជាត្រឹមត្រូវ។ សញ្ញានិគ្គហីត ត្រូវបានបង្ហាញខិតទៅខាង​ឆ្វេង​នៃ​ស្រៈ  ា
            បន្តិច ប៉ុន្តែ​ការខុសប្លែកនេះមិនងាយត្រូវបានគេមើលឃើញ។
          </p>

          <p>
            អក្សរបីតួដំបូងនៃឧទាហរណ៍នេះគឺជារបៀបសរសេរត្រឹមត្រូវសម្រាប់ពាក្យ ញុំ​
            (ដែលមិនមែនជាពាក្យខ្មែរទេ ប៉ុន្តែរបៀបសរសេរត្រូវតាមក្បួនដូចគ្នានឹង ឧទាហរណ៍ កុំ )។
            ភាពស្រដៀងគ្នានេះគឺជាហេតុផលមួយទៀតដែលធ្វើអោយងាយយល់ច្រឡំ។
          </p>

          <p>
            <b>ចំណាំ៖</b> មានកំហុសមួយនៅក្នុងកម្មវិធី iOS និង macOS ដោយ​បានបង្ហាញមូសិកទន្តនៅលើជំនួសអោយខាងក្រោមព្យព្ជានៈ ញ ទៅវិញ។
            កំហុសនេះធ្វើអោយមានការភាន់ច្រឡំជាខ្លាំង ហើយត្រូវបានគេរាយការណ៍ទៅកាន់ Apple ដើម្បីរកដំណោះស្រាយ (FB5761346) ។
            <a href="https://marc.durdin.net/2017/03/when-nyam-meets-nyam/" target="_blank">ព័ត៌មានលម្អិតបន្ថែម (2017)</a>។
          </p>

          <p>
           នេះគឺជាឧទាហណ៍នៃ <b>ករណីទី ០៤</b> និង <b>ករណីទី ០៥</b> នៅក្នុង <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">ឯកសារស្រាវជ្រាវ</a>។
          </p>

          <p>
            ក្តារចុចខ្មែរអង្គរ និង normalizer នឹង​តម្រៀប​  ា  និង  ំ ឡើងវិញ ហើយ
            នឹងបម្លែងស្រៈ  ុ អោយទៅជាតួអក្សរប្តូរព្យព្ជានៈដែលត្រឹមត្រូវ(មូសិកទន្ត) ដោយស្វ័យប្រវត្តិ។
          </p>
        `,
        },
        keys_nida: [
          { cap: 'ញ', key: ['shift', 'shift-K_J'] },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: ['Shift', 'ំ'], key: ['shift', 'shift-K_M'] },
          { cap: 'ា', key: 'default-K_A' },
        ],
        keys_angkor_mobile: [
          { cap: 'ញ', key: 'default-K_J+shift' },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: ['Shift', 'ំ'], key: ['shift', 'shift-K_M'] },
          //work but shift key doesn't appear
          { cap: 'ា', key: 'default-K_A' },
        ],
        keys_nida_tablet: [
          { cap: 'ញ', key: ['shift', 'shift-K_J'] },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: ['Shift', 'ំ'], key: ['shift', 'shift-K_M'] },
          { cap: 'ា', key: 'default-K_A' },
        ],
        keys_angkor_tablet: [
          { cap: 'ញ', key: ['shift', 'shift-K_J'] },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: ['Shift', 'ំ'], key: ['shift', 'shift-K_M'] },
          { cap: 'ា', key: 'default-K_A' },
        ],
      },
    ]
  },

  // additional examples: កុំ ប៉័ង លោក
];

export const enExampleTranslations = examples.reduce((obj, example) => {
  obj['example-'+example.id] = example.description.en;
  example.alternates.reduce((obj, alt) => {
    obj['example-'+example.id+'-alt-'+alt.id] = alt.description.en;
    return obj;
  }, obj);
  return obj;
}, {});

export const kmExampleTranslations = examples.reduce((obj, example) => {
  obj['example-'+example.id] = example.description.km;
  example.alternates.reduce((obj, alt) => {
    obj['example-'+example.id+'-alt-'+alt.id] = alt.description.km;
    return obj;
  }, obj);
  return obj;
}, {});
