<template>
	<section>
		<div class="group">
			<input type="text" placeholder="搜索关键字" v-model="keyword">
			<button @click="gen">生成签名参数</button>
		</div>
		<textarea rows="5">{{ result }}</textarea>
	</section>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { v4 as uuidv4 } from 'uuid';
import {md5} from "js-md5";

const keyword = ref('私藏浪漫')
const result = ref('生成结果')

function encodeAndSortObjectToURL(obj: Record<string, string>) {
	// 对象的键进行排序
	const sortedKeys = Object.keys(obj).sort();
	
	// 创建一个数组来存储键值对
	const encodedPairs = sortedKeys.map(key => {
		if (key !== 'q') {
			return `${key}=${obj[key]}`;
		}
		// 对每个值进行URL编码
		const encodedValue = encodeURIComponent(obj[key]);
		// 返回编码后的键值对
		return `${key}=${encodedValue}`;
	});
	
	// 将数组元素用'&'连接起来形成查询字符串
	const queryString = encodedPairs.join('&');
	
	// 返回拼接后的URL字符串
	return queryString;
}

const gen = () => {
	
	const t:Record<string, string> = {
		_support: '10000000',
		allowedRC: '1',
		corr: '1',
		pc: '10',
		pn: '1',
		q: keyword.value,

		src: 'mgtv',
		did: uuidv4(),
		timestamp: (new Date).toISOString().replace(/\.\d{3}Z/, "Z"),
		signVersion: '1',
		signNonce: uuidv4().replaceAll("-", ""),
	}

	const e = encodeAndSortObjectToURL(t)

	const y = 'xHAa3YZflWLogZUOzl'
	const n = ''.concat(y).concat(e).concat(y)

	const query = new URLSearchParams(Object.assign(t, {
		signature: md5(n),
	})).toString();

	
	result.value = query
}

</script>

<style scoped>
section {
	display: flex;
	flex-direction: column;
	padding: 20px;
	box-sizing: border-box;
}
.group {
	display: flex;
	margin-bottom: 8px;
}
input {
	padding: 2px 8px;
	box-sizing: border-box;
	border-radius: 4px;
	margin-right: 8px;
	width: 100%;
	height: 30px;
	border-color: var(--vp-button-alt-border);
	color: var(--vp-button-alt-text);
	background-color: var(--vp-button-alt-bg);
}
button {
	padding: 2px 8px;
	box-sizing: border-box;
	border-radius: 4px;
	width: 120px;
	
	border-color: var(--vp-button-alt-border);
	color: var(--vp-button-alt-text);
	background-color: var(--vp-button-alt-bg);
}
textarea {
	padding: 2px 8px;
	box-sizing: border-box;
	border-radius: 4px;
	border-color: var(--vp-button-alt-border);
	color: var(--vp-button-alt-text);
	background-color: var(--vp-button-alt-bg);
}
</style>