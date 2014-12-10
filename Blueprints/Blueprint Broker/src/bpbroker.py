#!/usr/bin/env python

import Queue
import signal
import time
import sys

import bpbroker



####################################################

def Shutdown(signum, fram):
	print "\n"
	sys.exit(0)

####################################################


bpbroker.c['test'] = 5
bpbroker.c.testy = 5
print bpbroker.c['test']
print bpbroker.c
sys.exit()


queue_worker = Queue.Queue()
queue_health = Queue.Queue()

api_thread = bpbroker.API.APIThread(queue_worker,queue_health)
api_thread.start()


signal.signal(signal.SIGINT,Shutdown)
while True:  time.sleep(5)
	
