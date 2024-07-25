import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const onedark: CustomThemeConfig = {
	name: 'onedark',
  properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Jetbrains_Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		'--theme-font-family-heading': `Montserrat, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "16px",
		"--theme-rounded-container": "6px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #C678DD 
		"--color-primary-50": "246 235 250", // #f6ebfa
		"--color-primary-100": "244 228 248", // #f4e4f8
		"--color-primary-200": "241 221 247", // #f1ddf7
		"--color-primary-300": "232 201 241", // #e8c9f1
		"--color-primary-400": "215 161 231", // #d7a1e7
		"--color-primary-500": "198 120 221", // #C678DD
		"--color-primary-600": "178 108 199", // #b26cc7
		"--color-primary-700": "149 90 166", // #955aa6
		"--color-primary-800": "119 72 133", // #774885
		"--color-primary-900": "97 59 108", // #613b6c
		// secondary | #61AFEF 
		"--color-secondary-50": "231 243 253", // #e7f3fd
		"--color-secondary-100": "223 239 252", // #dfeffc
		"--color-secondary-200": "216 235 251", // #d8ebfb
		"--color-secondary-300": "192 223 249", // #c0dff9
		"--color-secondary-400": "144 199 244", // #90c7f4
		"--color-secondary-500": "97 175 239", // #61AFEF
		"--color-secondary-600": "87 158 215", // #579ed7
		"--color-secondary-700": "73 131 179", // #4983b3
		"--color-secondary-800": "58 105 143", // #3a698f
		"--color-secondary-900": "48 86 117", // #305675
		// tertiary | #ABB2Bf 
		"--color-tertiary-50": "242 243 245", // #f2f3f5
		"--color-tertiary-100": "238 240 242", // #eef0f2
		"--color-tertiary-200": "234 236 239", // #eaecef
		"--color-tertiary-300": "221 224 229", // #dde0e5
		"--color-tertiary-400": "196 201 210", // #c4c9d2
		"--color-tertiary-500": "171 178 191", // #ABB2Bf
		"--color-tertiary-600": "154 160 172", // #9aa0ac
		"--color-tertiary-700": "128 134 143", // #80868f
		"--color-tertiary-800": "103 107 115", // #676b73
		"--color-tertiary-900": "84 87 94", // #54575e
		// success | #98C379 
		"--color-success-50": "240 246 235", // #f0f6eb
		"--color-success-100": "234 243 228", // #eaf3e4
		"--color-success-200": "229 240 222", // #e5f0de
		"--color-success-300": "214 231 201", // #d6e7c9
		"--color-success-400": "183 213 161", // #b7d5a1
		"--color-success-500": "152 195 121", // #98C379
		"--color-success-600": "137 176 109", // #89b06d
		"--color-success-700": "114 146 91", // #72925b
		"--color-success-800": "91 117 73", // #5b7549
		"--color-success-900": "74 96 59", // #4a603b
		// warning | #E5C07B 
		"--color-warning-50": "251 246 235", // #fbf6eb
		"--color-warning-100": "250 242 229", // #faf2e5
		"--color-warning-200": "249 239 222", // #f9efde
		"--color-warning-300": "245 230 202", // #f5e6ca
		"--color-warning-400": "237 211 163", // #edd3a3
		"--color-warning-500": "229 192 123", // #E5C07B
		"--color-warning-600": "206 173 111", // #cead6f
		"--color-warning-700": "172 144 92", // #ac905c
		"--color-warning-800": "137 115 74", // #89734a
		"--color-warning-900": "112 94 60", // #705e3c
		// error | #E06C75 
		"--color-error-50": "250 233 234", // #fae9ea
		"--color-error-100": "249 226 227", // #f9e2e3
		"--color-error-200": "247 218 221", // #f7dadd
		"--color-error-300": "243 196 200", // #f3c4c8
		"--color-error-400": "233 152 158", // #e9989e
		"--color-error-500": "224 108 117", // #E06C75
		"--color-error-600": "202 97 105", // #ca6169
		"--color-error-700": "168 81 88", // #a85158
		"--color-error-800": "134 65 70", // #864146
		"--color-error-900": "110 53 57", // #6e3539
		// surface | #282C34 
		"--color-surface-50": "223 223 225", // #dfdfe1
		"--color-surface-100": "212 213 214", // #d4d5d6
		"--color-surface-200": "201 202 204", // #c9cacc
		"--color-surface-300": "169 171 174", // #a9abae
		"--color-surface-400": "105 107 113", // #696b71
		"--color-surface-500": "40 44 52", // #282C34
		"--color-surface-600": "36 40 47", // #24282f
		"--color-surface-700": "30 33 39", // #1e2127
		"--color-surface-800": "24 26 31", // #181a1f
		"--color-surface-900": "20 22 25", // #141619
	}
}
