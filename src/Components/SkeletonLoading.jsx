import React from 'react'

export default function SkeletonLoading() {
    return ( 
        <div role="status" class="max-w-sm animate-pulse">
            <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-auto mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[360px] mb-2.5"></div>
            <span class="sr-only">Loading...</span>
        </div>
    )
}