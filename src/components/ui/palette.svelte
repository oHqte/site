<!-- [TODO] -->
<!-- <script lang="ts">
	// default -> paletteMethods.openPalette()
	// export -> palette. open()|close()|toggle()|

	// default -> <CommandPalette commands={actions} />
	// export -> <Palette commands={actions}/>

	import CommandPalette, { defineActions, createStoreMethods } from "svelte-command-palette";
	const paletteMethods = createStoreMethods();

	const actions = defineActions([
		{
			title: "opens my github profile",
			subTitle: "https://github.com/ohqte",
			onRun: ({ action, storeProps, storeMethods }) => {
				window.open("https://github.com/ohqte");
			},
			shortcut: "Space k"
		}
	]);
</script> -->
