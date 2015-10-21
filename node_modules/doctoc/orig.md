Visulator talk

# Intro

I learned about assembly in school but then I was in musician for long time and forgot all about it. Later I entered into computers at the top of the stack. I felt like I didn't really understand what was going on under the hood. So I started by learning C and eventually assembly.
I wrote a ping pong game but honestly though I realize that this is not really helping anyone there are definitely enough home games around even in assembly. So I thought about what could I do to learn assembly better myself and help others like me to have been easier time with this. Around the same time I started reading about CPU emulators. Of course writing another emulator wouldn't help anyone either but maybe I could write an emulator that did visualize what's going on inside the CPU . With that idea in mind visualater was born.

Do you feel like you are very unsure about what's going on inside a computer for real?
Have you always wondered if you should learn assembly to help understand computers under the hood, but maybe thought it was too hard?
I felt the same way but dove in and found it's not as hard as you might think and also created a tool to help others with it visualater. In this talk I will explain what visulator is, how it was created howard emulator keep you in javascript and how is visualize is what's going on cited also using clean h_t_m_l c_s_s in javascript . Visualator is powered by the web and then p_m purely.

Visual later is designed as an interactive resource to learn about assembly language and the cpu.
Not only can you play with the examples and see whats going on inside the c_p_u but also detailed documentation and links to other resources are included with repo.

# Web App

- all h_t_m_l and c_s_s
- all animations in css
- registers use odometers which transitions via transform
- the flags use a c s s show the transition
- powered by browserify
- disassebler is using capstone which has been converted to javascript with emscripten
- include some details about capstone and emscripten

# CPU

- raeds in opcodes and processes them to perform abrasion sis
- sometimes tricky for instance the size motor fire
- also certain register pairs are encoded with just 1 bite
- you get to read nice opcode tables like this one - link
- started my own emulator in order to use a dick route to explain how does works
- however you end up quickly with very hard to understand code which is mostly table based
- I will show you how to use tables work implemented s javascript hashes
- I tested my c_p_u emulator against the rio linux kernel
- I wrote a tool g e I 48 which runs a program and out puts the register contents it each step
- this note on you hope me understand how is c_p_u works when did you teach people website field me but also I could use it to generate all my text input
- so oster I had only implemented is small percentage of instructions I already had over 5000 test none of which I had to read by hand
- all I had to do was feed my c_p_u the real instructions and the real results and then make it work the same way
- if I needed more tests I just wrote more assembly examples
- I added to commons to the code in clouding meredith about home c_p_u works
- the switch then pull download into everything me dad is designed to help you understand how CPUs work and also how did visulator works
- as a caveat not all details of the c_p_u are implemented for instance pipe mining and so on this would have been much too complicated and been too much information anyways to just learn about how c_p_u and assembly work in general

# Implementation

- think about big instruction peeker dat returns me to detail about the instruction similar to a disassembler
	- actually just run instruction already to give info about it
	- for instance it would return instruction add tgt register eax, src imd 1 or register ebx
	- that could be used by the visualization to show the next instruction in detail
- show documentation for current instruction i.e. from 
	-  http://www.cs.virginia.edu/~evans/cs216/guides/x86.html#instructions
	- http://www.c-jump.com/CIS77/ASM/Assembly/lecture.html#A77_0240_inc_and_dec
	- https://courses.engr.illinois.edu/ece390/books/artofasm/CH06/CH06-2.html#HEADING2-117
	- http://en.wikibooks.org/wiki/X86_Assembly/Arithmetic#Increment_and_Decrement
- add short descriptions into a markdown file which can serve as full doc, but also be split to show up in visulator


## Memory

- show memory and stack in separate scrollable containers
- show the u t f 8 representation right next to it so it is similar to a hex dump
- add the border around first byte of each address that is pointed to by a register
- ideally could even show arrows have to talk to Hugsk about that
- each register is color coded the legend showing as a square right next to the value on top
- this color is then used for the border in the memory	
