import { Router } from "@src/mod.ts";

import * as utilSend from "@src/util/utilSend.ts";
import * as utilPlugin from "@src/util/utilPlugin.ts";
import * as unwrap from "@src/v2/unwrap.ts";
import * as api from "@src/v2/api.ts";

export const router = new Router();

//
//
// Pod
router.post("/pod/add", async (ctx) => {
	const data = await unwrap.podAdd(ctx);
	const result = await api.podAdd(data.handler, data.name);

	return utilSend.json(ctx, result);
});

router.post("/pod/remove", async (ctx) => {
	const data = await unwrap.podRemove(ctx);
	const result = await api.podRemove(data.uuid);

	return utilSend.json(ctx, result);
});

router.post("/pod/list", async (ctx) => {
	const data = await unwrap.podList(ctx);
	const result = await api.podList(data.handler);

	return utilSend.json(ctx, result);
});

router.post("/pod/list-plugins", async (ctx) => {
	await unwrap.podListPlugins(ctx);
	const result = await api.podListPlugins();

	return utilSend.json(ctx, result);
});

router.post("/pod/query", async (ctx) => {
	const data = await unwrap.podQuery(ctx);
	const result = await api.podQuery(data.uuid);

	return utilSend.json(ctx, result);
});

//
//
// Area
router.post("/area/add", async (ctx) => {
	const data = await unwrap.areaAdd(ctx);
	const result = await api.areaAdd(data.name);

	return utilSend.json(ctx, result);
});

router.post("/area/remove", async (ctx) => {
	const data = await unwrap.areaRemove(ctx);
	const result = await api.areaRemove(data.name);

	return utilSend.json(ctx, result);
});

router.post("/area/rename", async (ctx) => {
	const data = await unwrap.areaRename(ctx);
	const result = await api.areaRename(data.oldName, data.newName);

	return utilSend.json(ctx, result);
});

router.post("/area/list", async (ctx) => {
	await unwrap.areaList(ctx);
	const result = await api.areaList();

	return utilSend.json(ctx, result);
});

//
//
// Topic
router.post("/topic/add", async (ctx) => {
	const data = await unwrap.topicAdd(ctx);
	const result = await api.topicAdd(data.area, data.name);

	return utilSend.json(ctx, result);
});

router.post("/topic/remove", async (ctx) => {
	const data = await unwrap.topicRemove(ctx);
	const result = await api.topicRemove(data.area, data.name);

	return utilSend.json(ctx, result);
});

router.post("/topic/rename", async (ctx) => {
	const data = await unwrap.topicRename(ctx);
	const result = await api.topicRename(data.area, data.oldName, data.newName);

	return utilSend.json(ctx, result);
});

router.post("/topic/list", async (ctx) => {
	const data = await unwrap.topicList(ctx);
	const result = await api.topicList(data.area);

	return utilSend.json(ctx, result);
});

//
//
// Note
router.post("/note/add", async (ctx) => {
	const data = await unwrap.noteAdd(ctx);
	const result = await api.noteAdd(data.area, data.topic, data.name);

	return utilSend.json(ctx, result);
});

router.post("/note/remove", async (ctx) => {
	const data = await unwrap.noteRemove(ctx);
	const result = await api.noteRemove(data.area, data.topic, data.name);

	return utilSend.json(ctx, result);
});

router.post("/note/rename", async (ctx) => {
	const data = await unwrap.noteRename(ctx);
	const result = await api.noteRename(
		data.area,
		data.topic,
		data.oldName,
		data.newName
	);

	return utilSend.json(ctx, result);
});

router.post("/note/read", async (ctx) => {
	const data = await unwrap.noteRead(ctx);
	const result = await api.noteRead(data.area, data.topic, data.name);

	return utilSend.json(ctx, result);
});

router.post("/note/write", async (ctx) => {
	const data = await unwrap.noteWrite(ctx);
	const result = await api.noteWrite(
		data.area,
		data.topic,
		data.name,
		data.content
	);

	return utilSend.json(ctx, result);
});

router.post("/note/query", async (ctx) => {
	const data = await unwrap.noteQuery(ctx);
	const result = await api.noteQuery(data.area, data.topic, data.query);

	return utilSend.json(ctx, result);
});

router.post("/note/list", async (ctx) => {
	const data = await unwrap.noteList(ctx);
	const result = await api.noteList(data.area, data.topic);

	return utilSend.json(ctx, result);
});
